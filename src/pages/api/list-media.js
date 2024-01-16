export const runtime = 'edge';

export default async function handler(req, res) {
  try {
    // Log to check if the function is triggered
    console.log('Handler function started');

    // Check if CAT_MEDIA_BUCKET binding is available
    if (!context.env.CAT_MEDIA_BUCKET) {
      console.error('CAT_MEDIA_BUCKET binding is not available');
      return res.status(500).json({ error: 'CAT_MEDIA_BUCKET binding is not available' });
    }

    // Attempt to list objects in the bucket
    const data = await context.env.CAT_MEDIA_BUCKET.list({ prefix: '' }); // Adjust the prefix as needed
    if (!data || !data.objects) {
      console.error('No data or objects received from CAT_MEDIA_BUCKET');
      return res.status(500).json({ error: 'No data received from CAT_MEDIA_BUCKET' });
    }

    // Process and return the media data
    const media = data.objects.map(item => {
      return {
        url: `https://pub-a0c8afa367be4960988d3279cba56301.r2.dev/${item.key}`, // Replace [Your_R2_URL] with your R2 bucket URL
        type: item.key.endsWith('.mp4') ? 'video' : 'image',
      };
    });

    console.log('Media data processed successfully');
    return res.status(200).json(media);
  } catch (error) {
    console.error('Error in handler function:', error);
    return res.status(500).json({ error: 'Error in handler function', details: error.message });
  }
}
