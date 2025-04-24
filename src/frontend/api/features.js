export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const features = [
    {
      id: 1,
      title: 'Feature 1',
      description: 'Discover the power of innovation'
    },
    {
      id: 2,
      title: 'Feature 2',
      description: 'Experience seamless integration'
    },
    {
      id: 3,
      title: 'Feature 3',
      description: 'Unleash your creativity'
    }
  ];

  res.status(200).json({
    status: 'success',
    data: {
      features
    }
  });
} 