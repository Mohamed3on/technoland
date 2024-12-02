export interface City {
  id: string;
  name: string;
  country: string;
  levelsUrl: string;
  region: string;
}

export interface CityData extends City {
  medianSalary: number;
  techCityIndex: number;
  taxRate: number;
  netSalary: number;
  costOfLivingIndex: number;
}

export interface CityCardProps {
  city: CityData;
  rank: number;
}
