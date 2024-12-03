'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cities } from '@/lib/cities';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { cn } from '@/lib/utils';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = React.useState(false);

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

  const handleBaseCity = (cityId: string) => {
    startTransition(() => {
      router.replace(`/?${createQueryString('baseCity', cityId)}`);
    });
  };

  const currentBaseCity = searchParams.get('baseCity') || cities['sf'].id;
  const citiesArray = Object.values(cities).sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name);
    return nameComparison !== 0 ? nameComparison : a.country.localeCompare(b.country);
  });

  return (
    <div className='sticky top-16 z-40 border-b border-gray-200'>
      <div className='bg-white/80 backdrop-blur-md py-4 animate-fade-in'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6'>
          <div className='relative flex flex-col sm:flex-row gap-3 sm:gap-4'>
            {isPending && (
              <div className='absolute -top-4 right-4 sm:right-0'>
                <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
              </div>
            )}
            <div className='relative flex-1 flex flex-col justify-end group'>
              <div className='mb-2 text-xs leading-tight'>
                <span className='font-medium text-gray-700'>Search cities</span>{' '}
                <span className='text-gray-500'>— filter by city, country, or region</span>
              </div>
              <div className='relative'>
                <Input
                  placeholder='Try "United States", "Europe", or "Berlin"'
                  className={cn(
                    'w-full rounded-xl border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 focus:border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50',
                    isPending ? 'opacity-70' : ''
                  )}
                  defaultValue={searchParams.get('search') || ''}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <div className='absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl' />
              </div>
            </div>
            <div className='w-full sm:w-[280px] group'>
              <div className='mb-2 text-xs leading-tight'>
                <span className='font-medium text-gray-700'>Base City</span>{' '}
                <span className='text-gray-500'>— comparisons will be made against this city</span>
              </div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className={cn(
                      'w-full justify-between rounded-xl border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 group-hover:shadow-md',
                      open && 'ring-2 ring-blue-200 ring-opacity-50'
                    )}
                  >
                    {currentBaseCity
                      ? `${cities[currentBaseCity].name}, ${cities[currentBaseCity].country}`
                      : 'Select base city...'}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform duration-300' />
                    <div className='absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[280px] p-0 animate-in fade-in-0 zoom-in-95'>
                  <Command>
                    <CommandInput placeholder='Search base city...' className='h-9' />
                    <CommandList>
                      <CommandEmpty>No city found.</CommandEmpty>
                      <CommandGroup>
                        {citiesArray.map((city) => (
                          <CommandItem
                            key={city.id}
                            value={city.id}
                            onSelect={(currentValue) => {
                              handleBaseCity(currentValue);
                              setOpen(false);
                            }}
                            className='transition-colors duration-200'
                          >
                            <span>
                              {city.name}, {city.country}
                            </span>
                            <Check
                              className={cn(
                                'ml-auto h-4 w-4 transition-opacity duration-200',
                                currentBaseCity === city.id ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
