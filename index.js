const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('URL Summary API is running');
});

// Add the new endpoint to fetch URL content
app.post('/fetch-url-content', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const content = response.data;
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch URL content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});