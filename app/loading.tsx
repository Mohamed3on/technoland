import { CityCardSkeleton } from '@/app/components/CityCard';

function LoadingGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
      {[...Array(6)].map((_, i) => (
        <CityCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default function Loading() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-12'>
          <div className='h-12 w-96 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse' />
          <div className='h-6 w-2/3 bg-gray-200 rounded-lg mx-auto animate-pulse' />
        </div>
        <LoadingGrid />
      </div>
    </main>
  );
}
