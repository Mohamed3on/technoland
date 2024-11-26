import { NextResponse } from 'next/server';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const UNSPLASH_API = 'https://api.unsplash.com';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${UNSPLASH_API}/search/photos?query=${city}&orientation=landscape&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
        next: {
          revalidate: 30 * 24 * 60 * 60,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash');
    }

    const data = await response.json();
    const image = data.results[0];

    if (!image) {
      return NextResponse.json({ error: 'No images found' }, { status: 404 });
    }

    return NextResponse.json({
      imageUrl: image.urls.regular,
      photographer: image.user.name,
      photographerUrl: image.user.links.html,
    });
  } catch (error) {
    console.error('Unsplash API error:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
