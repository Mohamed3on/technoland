'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (term: string) => {
    if (term === '') {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      router.replace(`/?${params.toString()}`);
    } else {
      router.replace(`/?${createQueryString('search', term)}`);
    }
  };

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    if (searchParams.get('search')) {
      params.set('search', searchParams.get('search')!);
    }
    router.replace(`/?${params.toString()}`);
  };

  return (
    <div className='flex gap-4 max-w-3xl mx-auto mb-8'>
      <Input
        placeholder='Search cities or countries...'
        className='flex-1'
        defaultValue={searchParams.get('search') ?? ''}
        onChange={(e) => {
          const value = e.target.value;
          handleSearch(value);
        }}
      />
      <Select defaultValue={searchParams.get('sort') ?? 'gross'} onValueChange={handleSort}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort by' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='gross'>Gross Income</SelectItem>
          <SelectItem value='net'>Net Income</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
