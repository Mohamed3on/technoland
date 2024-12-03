import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { cities, LEVELS_BASE_URL } from '@/lib/cities';

export async function GET(request: Request, { params }: { params: Promise<{ cityId: string }> }) {
  try {
    const cityData = cities[(await params).cityId as keyof typeof cities];
    if (!cityData) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    const response = await fetch(LEVELS_BASE_URL + cityData.levelsUrl, {
      next: {
        revalidate: 7 * 24 * 60 * 60, // Cache for 7 days
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from levels.fyi for ${cityData.name}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const match = html.match(/"locationExchangeRate":(\d+\.?\d*)/);
    const exchangeRate = match ? parseFloat(match[1]) : null;

    const medianTotalCompP = $('p:contains("Median Total Comp")').first();
    if (!medianTotalCompP.length) {
      throw new Error('Could not find median total comp');
    }

    const medianSalaryH3 = medianTotalCompP.siblings('h3').first();
    if (!medianSalaryH3.length) {
      console.error('Could not find median salary');
      return NextResponse.json({ error: 'Could not find median salary' }, { status: 500 });
    }

    const salaryText = medianSalaryH3.text();
    const parsedMedianSalary = parseInt(salaryText.replace(/[^0-9,]/g, '').replace(/,/g, ''), 10);

    if (!parsedMedianSalary) {
      throw new Error('Could not parse median salary');
    }

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
