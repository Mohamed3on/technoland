import { City } from '@/lib/cities';
import { CityData } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTechCityIndex(
  grossSalary: number,
  costIndex: number,
  nycGrossSalary: number,
  nycTaxRate: number,
  taxRate: number,
  useNetIncome: boolean = true
): number {
  const baseIncome = useNetIncome ? grossSalary * (1 - taxRate / 100) : grossSalary;
  const nycBaseIncome = useNetIncome ? nycGrossSalary * (1 - nycTaxRate / 100) : nycGrossSalary;
  const cityPurchasingPower = baseIncome / (costIndex / 100);
  const nycPurchasingPower = nycBaseIncome / (100 / 100);
  return (cityPurchasingPower / nycPurchasingPower) * 100;
}

export async function processCityData(
  city: City,
  salaryData: { medianSalary: number },
  nycSalary: number,
  taxRates: Record<string, number>,
  costOfLivingData: Record<string, { index: number }>,
  nycTaxRate: number,
  useNetIncome: boolean
): Promise<CityData> {
  const taxRate = taxRates[city.country.toLowerCase()] || 0;
  const grossSalary = salaryData.medianSalary;
  const costLookupKey = `${city.name.toLowerCase()}-${city.country.toLowerCase()}`;
  const costIndex = costOfLivingData[costLookupKey]?.index || city.costOfLivingIndex;

  return {
    ...city,
    medianSalary: grossSalary,
    netSalary: grossSalary * (1 - taxRate / 100),
    taxRate,
    costOfLivingIndex: costIndex,
    techCityIndex: calculateTechCityIndex(
      grossSalary,
      costIndex,
      nycSalary,
      nycTaxRate,
      taxRate,
      useNetIncome
    ),
  };
}
