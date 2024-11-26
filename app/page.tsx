import { Suspense } from 'react';
import { cities } from '@/lib/cities';
import CityCard, { CityCardSkeleton } from '@/app/components/CityCard';

// Types
interface City {
  id: string;
  name: string;
  country: string;
  levelsUrl: string;
  costOfLivingIndex: number;
}

interface CityData extends City {
  medianSalary: number;
  netSalary: number;
  taxRate: number;
  techCityIndex: number;
}

interface SalaryData {
  medianSalary: number;
}

interface TaxRates {
  [country: string]: number;
}

interface CostOfLivingData {
  [key: string]: {
    city: string;
    country: string;
    index: number;
  };
}

async function getCityData(cityId: string): Promise<SalaryData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/salary/${cityId}`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch salary data for ${cityId}`);
  }
  return response.json();
}

async function getTaxRates(): Promise<TaxRates> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/tax-rates`);
  if (!response.ok) {
    throw new Error('Failed to fetch tax rates');
  }
  return response.json();
}

async function getCostOfLivingIndices(): Promise<CostOfLivingData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/cost-of-living`, {
    next: {
      revalidate: 14 * 24 * 60 * 60,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch cost of living indices');
  }
  return response.json();
}

function calculateTechCityIndex(
  grossSalary: number,
  costIndex: number,
  nycNetSalary: number,
  taxRate: number
): number {
  const netSalary = grossSalary * (1 - taxRate / 100);
  const cityPurchasingPower = netSalary / (costIndex / 100);
  const nycPurchasingPower = nycNetSalary / (100 / 100);
  return (cityPurchasingPower / nycPurchasingPower) * 100;
}

// Server Components
function LoadingGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
      {[...Array(6)].map((_, i) => (
        <CityCardSkeleton key={i} />
      ))}
    </div>
  );
}

function CitiesGrid({ cities }: { cities: CityData[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
      {cities
        .sort((a, b) => b.techCityIndex - a.techCityIndex)
        .map((city, index) => (
          <CityCard key={city.id} city={city} rank={index + 1} />
        ))}
    </div>
  );
}

// Main component
export default async function Home() {
  const [taxRates, costOfLivingData, ...citiesData] = await Promise.all([
    getTaxRates(),
    getCostOfLivingIndices(),
    ...Object.entries(cities).map(([key]) => getCityData(key)),
  ]);

  // Find NYC data from the results
  const nycData = citiesData[Object.keys(cities).indexOf('new-york')];
  const nycNetSalary = nycData.medianSalary * (1 - taxRates['united states'] / 100);

  // Process cities data without image fields
  const processedCitiesData = Object.entries(cities).map(([key, city], index) => {
    const salaryData = citiesData[index];
    const taxRate = taxRates[city.country.toLowerCase()] || 0;
    const grossSalary = salaryData.medianSalary;
    const netSalary = grossSalary * (1 - taxRate / 100);

    const costLookupKey = `${city.name.toLowerCase()}-${city.country.toLowerCase()}`;
    const costIndex = costOfLivingData[costLookupKey]?.index || city.costOfLivingIndex;

    return {
      ...city,
      medianSalary: grossSalary,
      netSalary,
      taxRate,
      costOfLivingIndex: costIndex,
      techCityIndex: calculateTechCityIndex(grossSalary, costIndex, nycNetSalary, taxRate),
    };
  });

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>Tech Cities Index</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Explore and compare tech hubs worldwide based on salary, cost of living, and overall
            tech opportunity index.
          </p>
        </div>
        <Suspense fallback={<LoadingGrid />}>
          <CitiesGrid cities={processedCitiesData} />
        </Suspense>
      </div>
    </main>
  );
}
