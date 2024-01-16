export const runtime = 'edge';

export async function handler(req, res) {
  try {
    const data = await CAT_MEDIA_BUCKET.list({ prefix: '' }); // Adjust the prefix as needed

    const media = data.objects.map(item => {
      return {
        url: `https://pub-a0c8afa367be4960988d3279cba56301.r2.dev/${item.key}`,
        type: item.key.endsWith('.mp4') ? 'video' : 'image',
      };
    });

    res.status(200.0).json(media);
  } catch (error) {
    console.error('Error listing media from CAT_MEDIA_BUCKET:', error);
    res.status(500).json({ error: 'Error listing media from CAT_MEDIA_BUCKET', details: error.message });
  }
}
