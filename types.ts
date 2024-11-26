export interface City {
  id: string;
  name: string;
  country: string;
  costOfLivingIndex: number;
  levelsUrl: string;
  imageUrl: string;
}

export interface CityData extends City {
  medianSalary: number;
  techCityIndex: number;
}

export interface CityCardProps {
  city: CityData;
  rank: number;
}