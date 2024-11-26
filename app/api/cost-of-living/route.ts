import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

const NUMBEO_URL = 'https://www.numbeo.com/cost-of-living/rankings_current.jsp?displayColumn=2';

interface CostOfLivingData {
  [key: string]: {
    city: string;
    country: string;
    index: number;
  };
}

export const dynamic = 'force-static';

async function getCostOfLivingData(): Promise<CostOfLivingData> {
  const response = await fetch(NUMBEO_URL, {
    next: {
      revalidate: 24 * 60 * 60, // Cache for 24 hours
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cost of living data');
  }

  const html = await response.text();
  return parseCostOfLivingData(html);
}

function parseCostOfLivingData(html: string): CostOfLivingData {
  const $ = cheerio.load(html);
  const costData: CostOfLivingData = {};

  $('tr').each((_, row) => {
    const cityCell = $(row).find('td.cityOrCountryInIndicesTable a');
    if (!cityCell.length) {
      return;
    }

    const fullLocation = cityCell.text().trim();
    const indexValue = $(row).find('td:last').text().trim();

    // Parse location into city and country
    const locationParts = fullLocation.split(', ');
    if (locationParts.length < 2) {
      console.log('locationParts', locationParts);
      return;
    }

    let city = locationParts[0];
    // Handle cases with state/province
    const country = locationParts.length === 3 ? locationParts[2] : locationParts[1];

    // Clean up city name (remove state abbreviation if present)
    city = city.replace(/,.*$/, '').trim();

    // Parse the index value
    const index = parseFloat(indexValue);
    if (isNaN(index)) {
      console.log('indexValue', indexValue);
      return;
    }

    // Create a key that's easier to match (lowercase, no spaces)
    const key = `${city.toLowerCase()}-${country.toLowerCase()}`;

    costData[key] = {
      city,
      country,
      index,
    };
  });

  return costData;
}

export async function GET() {
  try {
    const costOfLivingData = await getCostOfLivingData();
    return NextResponse.json(costOfLivingData);
  } catch (error) {
    console.error('Failed to fetch cost of living data:', error);
    return NextResponse.json({ error: 'Failed to fetch cost of living data' }, { status: 500 });
  }
}
