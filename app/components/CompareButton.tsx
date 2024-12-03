'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { City } from '@/types';
import { Button } from '@/components/ui/button';
import { startTransition, useState } from 'react';
import { Loader2Icon } from 'lucide-react';

interface CompareButtonProps {
  city: City;
  isBaseCity: boolean;
}

export function CompareButton({ city, isBaseCity }: CompareButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, setIsPending] = useState(false);

  const handleCompareClick = () => {
    setIsPending(true);
    startTransition(() => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('baseCity', city.id);
      router.push(`/?${newParams.toString()}`);
    });
  };

  if (isBaseCity) {
    return null;
  }

  return (
    <Button
      variant={'secondary'}
      size={'sm'}
      onClick={handleCompareClick}
      disabled={isPending}
      className='text-blue-600 hover:text-blue-900 transition-colors'
    >
      {isPending ? (
        <>
          <Loader2Icon className='animate-spin' />
          Setting base city...
        </>
      ) : (
        `Use ${city.name} as base city`
      )}
    </Button>
  );
}
