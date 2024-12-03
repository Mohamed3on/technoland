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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/salary/${cityId}`, {
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
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
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
      <div className='text-center pt-8 pb-6 space-y-4 animate-fade-in'>
        <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent animate-gradient'>
          Tech Cities Index
        </h1>
        <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Explore and compare tech hubs worldwide based on salary, cost of living, and overall tech
          opportunity index.
        </p>
        <div className='flex justify-center gap-2 pt-2'>
          <div className='px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 text-sm font-medium animate-float'>
            🌍 90+ Cities
          </div>
          <div
            className='px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 text-sm font-medium animate-float'
            style={{ animationDelay: '0.2s' }}
          >
            💰 Real Salary Data
          </div>
          <div
            className='px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-sm font-medium animate-float'
            style={{ animationDelay: '0.4s' }}
          >
            📊 Live Cost of Living Data
          </div>
        </div>
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
