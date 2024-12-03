import { City, CityData } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTechCityIndex(
  salary: number,
  costIndex: number,
  nycSalary: number
): number {
  const salaryRatio = salary / nycSalary;
  const costRatio = costIndex / 100;
  return (salaryRatio / costRatio) * 100;
}

export async function processCityData(
  city: City,
  salaryData: { medianSalary: number },
  baseCitySalary: number,
  taxRates: Record<string, number>,
  costOfLivingData: Record<string, { index: number }>,
  baseCity: City
): Promise<CityData> {
  const taxRate = taxRates[city.country.toLowerCase()] || 0;
  const grossSalary = salaryData.medianSalary;
  const netSalary = grossSalary * (1 - taxRate / 100);

  const costLookupKey = `${city.name.toLowerCase()}-${city.country.toLowerCase()}`;
  const baseCostLookupKey = `${baseCity.name.toLowerCase()}-${baseCity.country.toLowerCase()}`;

  let cityIndex = costOfLivingData[costLookupKey]?.index;

  if (!cityIndex) {
    console.error(`No cost of living index found for ${city.name}`);
    cityIndex = 100;
  }

  const baseCityIndex = costOfLivingData[baseCostLookupKey]?.index || 100;

  const normalizedCostIndex = (cityIndex / baseCityIndex) * 100;

  const baseCityTaxRate = taxRates[baseCity.country.toLowerCase()] || 0;
  const baseCityNetSalary = baseCitySalary * (1 - baseCityTaxRate / 100);

  return {
    ...city,
    medianSalary: grossSalary,
    netSalary,
    taxRate,
    costOfLivingIndex: normalizedCostIndex,
    techCityIndex: calculateTechCityIndex(netSalary, normalizedCostIndex, baseCityNetSalary),
  };
}
