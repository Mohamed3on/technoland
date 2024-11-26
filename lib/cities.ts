import type { City } from '@/types';

export const cities: Record<string, City> = {
  newYork: {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    costOfLivingIndex: 100,
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/new-york-city-area',
    imageUrl:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80',
  },
  sf: {
    id: 'sf',
    name: 'San Francisco',
    country: 'United States',
    costOfLivingIndex: 85.3,
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/san-francisco-bay-area',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
  },
  london: {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    costOfLivingIndex: 73.0,
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/london-metro-area',
    imageUrl:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
  },
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    costOfLivingIndex: 55.1,
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-dubai-area',
    imageUrl:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
  },
  berlin: {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    costOfLivingIndex: 47.6,
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/berlin-metropolitan-region',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80',
  },
};
