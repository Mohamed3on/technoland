'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (value: string) => {
    startTransition(() => {
      if (value === '') {
        const params = new URLSearchParams(searchParams);
        params.delete('search');
        router.replace(`/?${params.toString()}`);
      } else {
        router.replace(`/?${createQueryString('search', value)}`);
      }
    });
  };

  const handleSort = (value: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('sort', value);
      if (searchParams.get('search')) {
        params.set('search', searchParams.get('search')!);
      }
      router.replace(`/?${params.toString()}`);
    });
  };

  return (
    <div className='space-y-4 mb-8'>
      <div className='relative flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto px-4 sm:px-0'>
        {isPending && (
          <div className='absolute -top-6 right-4 sm:right-0'>
            <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
          </div>
        )}
        <div className='relative flex-1'>
          <label className='text-sm text-muted-foreground block mb-2'>Search</label>
          <Input
            placeholder='Search cities, countries or regions...'
            className={`w-full ${isPending ? 'opacity-70' : ''}`}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div>
          <label className='text-sm text-muted-foreground block mb-2'>
            Rank cities by <span className='text-xs opacity-70'>(before vs. after taxes)</span>
          </label>
          <Select defaultValue={searchParams.get('sort') ?? 'net'} onValueChange={handleSort}>
            <SelectTrigger className={`w-full sm:w-[180px] ${isPending ? 'opacity-70' : ''}`}>
              <SelectValue placeholder='Sort by' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='net'>Net Income</SelectItem>
              <SelectItem value='gross'>Gross Income</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
