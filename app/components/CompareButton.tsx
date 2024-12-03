'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { City } from '@/types';
import { Button } from '@/components/ui/button';

interface CompareButtonProps {
  city: City;
  isBaseCity: boolean;
}

export function CompareButton({ city, isBaseCity }: CompareButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCompareClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('baseCity', city.id);
    router.push(`/?${newParams.toString()}`);
  };

  if (isBaseCity) {
    return null;
  }

  return (
    <Button
      variant={'secondary'}
      size={'sm'}
      onClick={handleCompareClick}
      className='text-blue-600 hover:text-blue-900 transition-colors'
    >
      Use {city.name} as base city
    </Button>
  );
}
