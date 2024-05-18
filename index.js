const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('URL Summary API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});