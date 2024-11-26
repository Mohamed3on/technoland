import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { cities } from '@/lib/cities';

export async function GET(request: Request, { params }: { params: { cityId: string } }) {
  try {
    const cityData = cities[params.cityId as keyof typeof cities];
    if (!cityData) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    const response = await axios.get(cityData.levelsUrl);

    const $ = cheerio.load(response.data);

    // Extract exchange rate from the response data
    const responseText = response.data;
    const match = responseText.match(/"locationExchangeRate":(\d+\.?\d*)/);
    const exchangeRate = match ? parseFloat(match[1]) : null;

    // find "Median Total Comp"
    const medianTotalCompP = $('p:contains("Median Total Comp")').first();
    if (!medianTotalCompP.length) {
      throw new Error('Could not find median total comp');
    }

    const medianSalaryH3 = medianTotalCompP.siblings('h3').first();
    if (!medianSalaryH3.length) {
      console.log('Could not find median salary');
      return NextResponse.json({ error: 'Could not find median salary' }, { status: 500 });
    }

    const salaryText = medianSalaryH3.text();
    const parsedMedianSalary = parseInt(salaryText.replace(/[^0-9,]/g, '').replace(/,/g, ''), 10);

    if (!parsedMedianSalary) {
      throw new Error('Could not parse median salary');
    }

    // Convert to USD if exchange rate is available
    const salaryInUSD = exchangeRate
      ? Math.round(parsedMedianSalary / exchangeRate)
      : parsedMedianSalary;

    return NextResponse.json({
      medianSalary: salaryInUSD,
      originalSalary: parsedMedianSalary,
      exchangeRate: exchangeRate,
    });
  } catch (error) {
    console.error('Error fetching salary:', error);
    return NextResponse.json({ error: 'Failed to fetch salary data' }, { status: 500 });
  }
}
