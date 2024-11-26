import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const dynamic = 'force-static';

const TAX_RATES_URL = 'https://tradingeconomics.com/country-list/personal-income-tax-rate';

async function getAllTaxRates(): Promise<Record<string, number>> {
  const response = await fetch(TAX_RATES_URL, {
    next: {
      revalidate: 30 * 24 * 60 * 60,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tax rates');
  }

  const html = await response.text();
  return parseTaxRates(html);
}

function parseTaxRates(html: string): Record<string, number> {
  const ratesMap: Record<string, number> = {};
  const $ = cheerio.load(html);

  $('tr.datatable-row, tr.datatable-row-alternating').each((_, row) => {
    const country = $(row).find('td a').text().trim().toLowerCase();
    const rateText = $(row).find('td').eq(1).text().trim();
    const rate = parseFloat(rateText);

    if (country && !isNaN(rate)) {
      ratesMap[country] = rate;
    }
  });

  return ratesMap;
}

export async function GET() {
  try {
    const rates = await getAllTaxRates();
    return NextResponse.json(rates);
  } catch (error) {
    console.error('Failed to fetch tax rates:', error);
    return NextResponse.json({ error: 'Failed to fetch tax rates' }, { status: 500 });
  }
}
