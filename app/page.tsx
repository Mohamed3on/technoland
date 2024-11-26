import { Suspense } from 'react';
import { cities } from '@/lib/cities';
import CityCard from '@/app/components/CityCard';

// Types
interface City {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  costOfLivingIndex: number;
}

interface CityData extends City {
  medianSalary: number;
  techCityIndex: number;
}

interface SalaryData {
  medianSalary: number;
}

// Data fetching
async function getCityData(cityId: string): Promise<SalaryData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/salary/${cityId}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch salary data for ${cityId}`);
  }
  return response.json();
}

function calculateTechCityIndex(salary: number, costIndex: number, nycSalary: number): number {
  return (salary / nycSalary / (costIndex / 100)) * 100;
}

// Server Components
function LoadingCard() {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg bg-white animate-pulse'>
      <div className='h-48 bg-gray-200' />
      <div className='p-6 space-y-4'>
        <div className='h-6 bg-gray-200 rounded w-2/3' />
        <div className='h-4 bg-gray-200 rounded w-1/3' />
        <div className='space-y-3'>
          <div className='h-4 bg-gray-200 rounded' />
          <div className='h-4 bg-gray-200 rounded' />
          <div className='h-4 bg-gray-200 rounded' />
        </div>
      </div>
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
  const nycData = await getCityData('newYork');
  const citiesData = await Promise.all(
    Object.entries(cities).map(async ([key, city]) => {
      const salaryData = key === 'newYork' ? nycData : await getCityData(key);
      return {
        ...city,
        medianSalary: salaryData.medianSalary,
        techCityIndex:
          key === 'newYork'
            ? 100
            : calculateTechCityIndex(
                salaryData.medianSalary,
                city.costOfLivingIndex,
                nycData.medianSalary
              ),
      };
    })
  );

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
        <Suspense
          fallback={
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
              {[...Array(6)].map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          }
        >
          <CitiesGrid cities={citiesData} />
        </Suspense>
      </div>
    </main>
  );
}
