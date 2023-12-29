import { S3 } from 'aws-sdk';

const endpoint = 'https://323f42859527b406beadd91bff779583.r2.cloudflarestorage.com';

export default async function handler(req, res) {
  const s3 = new S3({
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
    endpoint: endpoint,
    signatureVersion: 'v4',
  });
  try {
    const data = await s3.listObjectsV2({
      Bucket: process.env.R2_BUCKET_NAME,
    }).promise();

    const media = data.Contents.map(item => {
      return {
        url: `https://pub-a0c8afa367be4960988d3279cba56301.r2.dev/${item.Key}`,
        type: item.Key.endsWith('.mp4') ? 'video' : 'image',
      };
    });

    res.status(200).json(media);
  } catch (error) {
    console.error('Error listing media from R2:', error);
    res.status(500).json({ error: 'Error listing media from R2', details: error.message });
  }
}

