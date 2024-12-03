import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Tip } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { CityData } from '@/types';
import { Badge } from '@/components/ui/badge';
import { CompareButton } from './CompareButton';
import { cn } from '@/lib/utils';
import { formatComparison, formatTaxComparison } from '@/lib/formatting';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1444723121867-7a241cacace9';

async function getCityImage(cityName: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/city-image?city=${cityName}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  if (!response.ok) {
    return {
      imageUrl: PLACEHOLDER_IMAGE,
      photographer: 'Thaddaeus Lim',
      photographerUrl: 'https://unsplash.com/@thaddaeuslee',
    };
  }
  return response.json();
}

interface CityCardProps {
  city: CityData;
  rank: number;
  isBaseCity: boolean;
  baseCity: CityData;
}

export function CityCardSkeleton() {
  return (
    <Card className='overflow-hidden h-full'>
      <div className='relative h-48'>
        <Skeleton className='w-full h-full' />
      </div>
      <CardHeader className='pb-2'>
        <div className='space-y-2'>
          <Skeleton className='h-6 w-32' />
          <Skeleton className='h-4 w-24' />
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='flex justify-between items-center'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-4 w-16' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default async function CityCard({ city, rank, isBaseCity, baseCity }: CityCardProps) {
  const imageData = await getCityImage(city.name + ' ' + city.country);

  const salaryComparison = formatComparison(
    city.medianSalary,
    baseCity.medianSalary,
    baseCity.name
  );
  const taxComparison = formatTaxComparison(city.taxRate, baseCity.taxRate, baseCity.name);
  const netSalaryComparison = formatComparison(city.netSalary, baseCity.netSalary, baseCity.name);
  const costComparison = formatComparison(
    city.costOfLivingIndex,
    baseCity.costOfLivingIndex,
    baseCity.name,
    'cost'
  );
  const purchasingPowerComparison = formatComparison(
    city.techCityIndex,
    baseCity.techCityIndex,
    baseCity.name,
    'power'
  );

  return (
    <Suspense fallback={<CityCardSkeleton />}>
      <Card className='overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative'>
        {isBaseCity && (
          <div className='absolute -right-8 top-8 rotate-45 z-10'>
            <div className='bg-gradient-to-r from-blue-500 to-blue-600 text-white py-1 px-10 text-xs font-medium shadow-lg'>
              Base City
            </div>
          </div>
        )}

        <div className='relative h-48 group'>
          <Image
            width={800}
            height={400}
            src={imageData?.imageUrl || ''}
            alt={city.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <div
            className={cn(
              'absolute top-0 left-0 right-0 bottom-0',
              'bg-gradient-to-b from-black/50 via-transparent to-transparent',
              'group-hover:opacity-0 transition-opacity duration-300'
            )}
          />
          <div
            className={cn(
              'absolute top-0 left-0 right-0 bottom-0',
              'bg-gradient-to-t from-black/80 via-black/25 to-transparent',
              'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            )}
          />

          <div className='absolute top-4 left-4'>
            <Badge
              variant='custom'
              className='bg-gradient-to-r from-blue-500/95 to-blue-600/95 backdrop-blur-sm text-white px-4 py-1.5 text-base font-semibold shadow-lg ring-2 ring-white/20'
            >
              #{rank}
            </Badge>
          </div>

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

        <CardHeader className='pb-2'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900'>{city.name}</h2>
            <p className='text-base text-gray-600 mt-0.5'>{city.country}</p>
          </div>
        </CardHeader>

        <CardContent>
          <div className='space-y-4'>
            {!isBaseCity && (
              <div className='space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100'>
                <div className={`text-sm font-medium ${purchasingPowerComparison.color}`}>
                  {purchasingPowerComparison.text}
                </div>
                <div className={`text-sm font-medium ${costComparison.color}`}>
                  {costComparison.text}
                </div>
              </div>
            )}

            <div className='space-y-3'>
              <div className='flex items-center gap-1'>
                <span className='font-semibold text-gray-700 text-sm'>Median Salary</span>
                <Tip content='Based on software engineer salaries from levels.fyi'>
                  <InfoIcon className='h-4 w-4 text-gray-400' />
                </Tip>
              </div>

              <div className='grid grid-cols-3 gap-4 bg-white p-3 rounded-lg border border-gray-200'>
                <div>
                  <div className='text-xs text-gray-500'>Gross</div>
                  <div className='font-semibold text-gray-900 text-sm'>
                    ${new Intl.NumberFormat().format(city.medianSalary)}
                  </div>
                  {!isBaseCity && (
                    <div className={`text-[11px] ${salaryComparison.color}`}>
                      {salaryComparison.text}
                    </div>
                  )}
                </div>

                <div>
                  <div className='text-xs text-gray-500'>Tax Rate</div>
                  <div className='font-semibold text-gray-900 text-sm'>
                    {city.taxRate.toFixed(1)}%
                  </div>
                  {!isBaseCity && (
                    <div className={`text-[11px] ${taxComparison.color}`}>{taxComparison.text}</div>
                  )}
                </div>

                <div>
                  <div className='text-xs text-gray-500'>Net</div>
                  <div className='font-semibold text-gray-900 text-sm'>
                    ${new Intl.NumberFormat().format(Math.round(city.netSalary))}
                  </div>
                  {!isBaseCity && (
                    <div className={`text-[11px] ${netSalaryComparison.color}`}>
                      {netSalaryComparison.text}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        {!isBaseCity && (
          <CardFooter className='pt-2'>
            <div className='flex items-center justify-between w-full'>
              <Badge variant='outline' className='text-xs bg-gray-50'>
                {city.region}
              </Badge>
              <CompareButton city={city} isBaseCity={isBaseCity} />
            </div>
          </CardFooter>
        )}
      </Card>
    </Suspense>
  );
}
