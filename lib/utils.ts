import { City } from '@/lib/cities';
import { CityData } from '@/types';
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
  nycSalary: number,
  taxRates: Record<string, number>,
  costOfLivingData: Record<string, { index: number }>,
  useGrossIncome: boolean
): Promise<CityData> {
  const taxRate = taxRates[city.country.toLowerCase()] || 0;
  const grossSalary = salaryData.medianSalary;
  const netSalary = grossSalary * (1 - taxRate / 100);

  const costLookupKey = `${city.name.toLowerCase()}-${city.country.toLowerCase()}`;
  const costIndex = costOfLivingData[costLookupKey]?.index || city.costOfLivingIndex;

  const nycTaxRate = taxRates['united states'] || 0;
  const nycNetSalary = nycSalary * (1 - nycTaxRate / 100);

  const salaryForIndex = useGrossIncome ? grossSalary : netSalary;
  const nycSalaryForIndex = useGrossIncome ? nycSalary : nycNetSalary;

  return {
    ...city,
    medianSalary: grossSalary,
    netSalary,
    taxRate,
    costOfLivingIndex: costIndex,
    techCityIndex: calculateTechCityIndex(salaryForIndex, costIndex, nycSalaryForIndex),
  };
}
