const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

// Import OpenAI SDK

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('URL Summary API is running');
});

// Modify the /fetch-url-content endpoint to use Cheerio for extracting the main text
app.post('/fetch-url-content', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Remove script and style elements
    $('script, style').remove();

    // Extract the main text content
    const mainText = $('body').text();

    res.json({ mainText });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch URL content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});