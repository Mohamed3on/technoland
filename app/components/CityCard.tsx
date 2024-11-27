import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Tip } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { CityData } from '@/types';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1444723121867-7a241cacace9';

async function getCityImage(cityName: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/city-image?city=${cityName}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  if (!response.ok)
    return {
      imageUrl: PLACEHOLDER_IMAGE,
      photographer: 'Thaddaeus Lim',
      photographerUrl: 'https://unsplash.com/@thaddaeuslee',
    };
  return response.json();
}

const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export function CityCardSkeleton() {
  return (
    <Card className='overflow-hidden h-full'>
      <div className='relative h-48'>
        <Skeleton className='w-full h-full' />
      </div>
      <CardHeader className='flex flex-row items-start justify-between space-y-0 pb-2'>
        <div className='space-y-2'>
          <Skeleton className='h-6 w-32' />
          <Skeleton className='h-4 w-24' />
        </div>
        <Skeleton className='h-8 w-12 rounded-full' />
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-4 w-32' />
            <Skeleton className='h-4 w-24' />
          </div>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-16' />
          </div>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-4 w-28' />
            <Skeleton className='h-4 w-24' />
          </div>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-16' />
          </div>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-16' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function CityCard({ city, rank }: { city: CityData; rank: number }) {
  const imageData = await getCityImage(city.name + ' ' + city.country);

  return (
    <Suspense fallback={<CityCardSkeleton />}>
      <Card className='overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
        <div className='relative h-48 group'>
          <Image
            width={800}
            height={400}
            src={imageData?.imageUrl || ''}
            alt={city.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          {imageData?.photographer && (
            <a
              href={imageData.photographerUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute bottom-2 right-2 text-xs text-white opacity-50 hover:opacity-100 z-10'
            >
              Photo by {imageData.photographer}
            </a>
          )}
        </div>
        <CardHeader className='flex flex-row items-start justify-between space-y-0 pb-2'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>{city.name}</h2>
            <p className='text-gray-600'>{toTitleCase(city.country)}</p>
          </div>
          <div className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
            # {rank}
          </div>
        </CardHeader>
        <CardContent>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 flex items-center gap-1'>
                Median Gross Income
                <Tip
                  content={
                    <p className='max-w-xs'>
                      Median total yearly compensation for senior software engineers (from{' '}
                      <a href='https://levels.fyi' target='_blank' rel='noopener noreferrer'>
                        levels.fyi
                      </a>
                      )
                    </p>
                  }
                >
                  <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                </Tip>
              </span>
              <span className='font-semibold'>
                ${new Intl.NumberFormat().format(city.medianSalary)}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 flex items-center gap-1'>
                Country Tax Rate
                <Tip
                  content={
                    <p className='max-w-xs'>Highest marginal tax rate in the country (estimated)</p>
                  }
                >
                  <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                </Tip>
              </span>
              <span className='font-semibold'>{city.taxRate.toFixed(1)}%</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>Median Net Income</span>
              <span className='font-semibold'>
                ${new Intl.NumberFormat().format(city.netSalary)}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 flex items-center gap-1'>
                Cost of Living Index
                {city.costOfLivingIndex !== 100 && (
                  <Tip
                    content={
                      <p className='max-w-xs'>
                        {city.costOfLivingIndex > 100
                          ? `${city.name} is ${(city.costOfLivingIndex - 100).toFixed(
                              1
                            )}% more expensive`
                          : `${city.name} is ${(100 - city.costOfLivingIndex).toFixed(
                              1
                            )}% cheaper`}{' '}
                        than New York City, according to{' '}
                        <a
                          href='https://www.numbeo.com'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline'
                        >
                          Numbeo
                        </a>
                        .
                      </p>
                    }
                  >
                    <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                  </Tip>
                )}
              </span>
              <span className='font-semibold'>{city.costOfLivingIndex.toFixed(1)}</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 flex items-center gap-1'>
                Tech City Index
                {city.techCityIndex !== 100 && (
                  <Tip
                    content={
                      <p className='max-w-xs'>
                        {city.techCityIndex > 100
                          ? `Tech workers in ${city.name} have ${(city.techCityIndex - 100).toFixed(
                              1
                            )}% more purchasing power`
                          : `Tech workers in ${city.name} have ${(100 - city.techCityIndex).toFixed(
                              1
                            )}% less purchasing power`}{' '}
                        than tech workers in New York City.
                        <br />
                        <br />
                        This index combines local tech salaries with cost of living and tax rates to
                        measure{' '}
                        <a
                          href='https://en.wikipedia.org/wiki/Purchasing_power'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline'
                        >
                          purchasing power
                        </a>
                        .
                      </p>
                    }
                  >
                    <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                  </Tip>
                )}
              </span>
              <span
                className={`font-semibold ${
                  city.techCityIndex > 100
                    ? 'text-green-500'
                    : city.techCityIndex < 100
                    ? 'text-red-500'
                    : 'text-blue-500'
                }`}
              >
                {city.techCityIndex.toFixed(1)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}
