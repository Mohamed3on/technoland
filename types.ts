export interface City {
  id: string;
  name: string;
  country: string;
  costOfLivingIndex: number;
  levelsUrl: string;
  imageUrl?: string;
  region: string;
}

export interface CityData extends City {
  medianSalary: number;
  techCityIndex: number;
  taxRate: number;
  netSalary: number;
}

export interface CityCardProps {
  city: CityData;
  rank: number;
}
