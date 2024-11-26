import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

interface CityData {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  costOfLivingIndex: number;
  medianSalary: number;
  netSalary: number;
  techCityIndex: number;
  taxRate: number;
}

async function getCityImage(cityName: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/city-image?city=${encodeURIComponent(
        cityName
      )}`,
      { next: { revalidate: 24 * 60 * 60 } }
    );
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Failed to fetch image:', error);
    return null;
  }
}

const toTitleCase = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export default async function CityCard({ city, rank }: { city: CityData; rank: number }) {
  const imageData = await getCityImage(city.name);

  return (
    <TooltipProvider delayDuration={200}>
      <Card className='overflow-hidden h-full transition-all duration-300 hover:-translate-y-1'>
        <div className='relative h-48 group'>
          <Image
            width={800}
            height={400}
            src={
              imageData?.imageUrl ||
              `https://images.unsplash.com/photo-${city.imageUrl}?auto=format&fit=crop&q=80`
            }
            alt={city.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
          {imageData?.photographer && (
            <a
              href={imageData.photographerUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute bottom-2 right-2 text-xs text-white opacity-50 hover:opacity-100'
            >
              Photo by {imageData.photographer}
            </a>
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p className='max-w-xs'>
                      Median total compensation for senior software engineers from levels.fyi
                    </p>
                  </TooltipContent>
                </Tooltip>
              </span>
              <span className='font-semibold'>
                ${new Intl.NumberFormat().format(city.medianSalary)}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 flex items-center gap-1'>
                Tax Rate
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p className='max-w-xs'>Highest marginal tax rate in the country</p>
                  </TooltipContent>
                </Tooltip>
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
                Cost of Living
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className='h-4 w-4 text-gray-400 cursor-help' />
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p className='max-w-xs'>Cost of living index from Numbeo</p>
                  </TooltipContent>
                </Tooltip>
              </span>
              <span className='font-semibold'>{city.costOfLivingIndex.toFixed(1)}</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>Tech City Index</span>
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
    </TooltipProvider>
  );
}
