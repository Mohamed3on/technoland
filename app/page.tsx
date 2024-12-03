import { Suspense } from 'react';
import { cities } from '@/lib/cities';
import CityCard, { CityCardSkeleton } from '@/app/components/CityCard';
import SearchBar from '@/app/components/SearchBar';
import { processCityData } from '@/lib/utils';

interface PageProps {
  searchParams: {
    search?: string;
    baseCity?: string;
  };
}

async function getSalaryData(cityId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/salary/${cityId}`, {
    next: {
      revalidate: 7 * 24 * 60 * 60,
    },
  });
  if (!response.ok) {
    console.error(`Failed to fetch salary data for ${cityId}`);
    return { medianSalary: 0 };
  }
  return response.json();
}

function LoadingGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-pulse'>
      {[...Array(6)].map((_, i) => (
        <CityCardSkeleton key={i} />
      ))}
    </div>
  );
}

async function CitiesGrid({ searchParams }: { searchParams: PageProps['searchParams'] }) {
  const [taxRates, costOfLivingData] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/tax-rates`, {
      next: {
        revalidate: 7 * 24 * 60 * 60,
      },
    }).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/cost-of-living`, {
      next: {
        revalidate: 7 * 24 * 60 * 60,
      },
    }).then((r) => r.json()),
  ]);

  const baseCityId = searchParams?.baseCity || 'sf';
  const baseCity = cities[baseCityId];

  if (!baseCity) {
    throw new Error('Invalid base city');
  }

  const filteredCities = Object.values(cities).filter((city) => {
    const searchTerm = searchParams?.search?.toLowerCase().trim();
    if (!searchTerm) return true;
    return (
      city.name.toLowerCase().includes(searchTerm) ||
      city.country.toLowerCase().includes(searchTerm) ||
      city.region.toLowerCase().includes(searchTerm)
    );
  });

  const [baseCitySalaryData, ...citiesSalaryData] = await Promise.all([
    getSalaryData(baseCityId),
    ...filteredCities.map((city) => getSalaryData(city.id)),
  ]);

  const processedBaseCity = await processCityData(
    baseCity,
    baseCitySalaryData,
    baseCitySalaryData.medianSalary,
    taxRates,
    costOfLivingData,
    baseCity
  );

  const processedCities = await Promise.all(
    filteredCities.map((city, index) =>
      processCityData(
        city,
        citiesSalaryData[index],
        baseCitySalaryData.medianSalary,
        taxRates,
        costOfLivingData,
        baseCity
      )
    )
  );

  const sortedCities = processedCities.sort((a, b) => b.techCityIndex - a.techCityIndex);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
      {sortedCities.map((city, index) => (
        <CityCard
          key={city.id}
          city={city}
          rank={index + 1}
          isBaseCity={city.id === baseCityId}
          baseCity={processedBaseCity}
        />
      ))}
    </div>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<PageProps['searchParams']>;
}) {
  const fullSearchParams = await searchParams;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='text-center pt-8 pb-6'>
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>Tech Cities Index</h1>
        <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto'>
          Explore and compare tech hubs worldwide based on salary, cost of living, and overall tech
          opportunity index.
        </p>
      </div>

      <SearchBar />

      <div className='py-8'>
        <Suspense fallback={<LoadingGrid />}>
          <CitiesGrid searchParams={fullSearchParams} />
        </Suspense>
      </div>
    </div>
  );
}
