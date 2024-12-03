const UNSPLASH_API = 'https://api.unsplash.com';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return new Response('City parameter is required', { status: 400 });
  }

  try {
    const response = await fetch(
      `${UNSPLASH_API}/search/photos?query=${encodeURIComponent(
        city
      )}&orientation=landscape&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        next: { revalidate: 60 * 60 * 24 * 30 }, // Cache for 30 days
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const data = await response.json();
    const photo = data.results[0];

    if (!photo) {
      return new Response('No images found', { status: 404 });
    }

    return Response.json({
      imageUrl: photo.urls.regular,
      photographer: photo.user.name,
      photographerUrl: photo.user.links.html,
    });
  } catch (error) {
    console.error('Error fetching city image:', error);
    return new Response('Failed to fetch image', { status: 500 });
  }
}
