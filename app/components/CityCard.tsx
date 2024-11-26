import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface CityData {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  costOfLivingIndex: number;
  medianSalary: number;
  techCityIndex: number;
}

export default function CityCard({ city, rank }: { city: CityData; rank: number }) {
  return (
    <Card className='overflow-hidden h-full transition-all duration-300 hover:-translate-y-1'>
      <div className='relative h-48 group'>
        <img
          src={city.imageUrl}
          alt={city.name}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>
      <CardHeader className='flex flex-row items-start justify-between space-y-0 pb-2'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>{city.name}</h2>
          <p className='text-gray-600'>{city.country}</p>
        </div>
        <div className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
          # {rank}
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Median Salary</span>
            <span className='font-semibold'>
              ${new Intl.NumberFormat().format(city.medianSalary)}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Cost of Living</span>
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
  );
}
