export interface City {
  id: string;
  name: string;
  country: string;
  costOfLivingIndex: number;
  levelsUrl: string;
  imageUrl: string;
}

interface CityData extends City {
  medianSalary: number;
  netSalary: number;
  taxRate: number;
  techCityIndex: number;
}
