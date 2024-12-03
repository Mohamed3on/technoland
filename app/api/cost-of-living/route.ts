import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { fallbackCostOfLiving } from '@/lib/fallbackCostOfLiving';
import type { CostOfLivingData } from '@/lib/fallbackCostOfLiving';

const NUMBEO_URL = 'https://www.numbeo.com/cost-of-living/rankings_current.jsp?displayColumn=2';

export const dynamic = 'force-static';

async function getCostOfLivingData(): Promise<CostOfLivingData> {
  try {
    const response = await fetch(NUMBEO_URL, {
      next: {
        revalidate: 7 * 24 * 60 * 60, // Cache for 7 days
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cost of living data');
    }

    const html = await response.text();
    const liveData = parseCostOfLivingData(html);

    // Merge live data with fallback data, preferring live data when available
    return {
      ...fallbackCostOfLiving,
      ...liveData,
    };
  } catch (error) {
    console.error('Failed to fetch live cost of living data:', error);
    return fallbackCostOfLiving;
  }
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

    const locationParts = fullLocation.split(', ');
    if (locationParts.length < 2) {
      console.log('locationParts', locationParts);
      return;
    }

    const city = locationParts[0].replace(/,.*$/, '').trim();
    let state = '';
    let country = '';

    // Handle cases with state/province
    if (locationParts.length === 3) {
      state = locationParts[1];
      country = locationParts[2];
    } else {
      country = locationParts[1];
    }

    const index = parseFloat(indexValue);
    if (isNaN(index)) {
      return;
    }

    // Store with just city and country in the key
    const key = `${city.toLowerCase()}-${country.toLowerCase()}`;

    costData[key] = {
      city,
      state, // Keep state in the data object for Numbeo URL
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
    return NextResponse.json(fallbackCostOfLiving);
  }
}
