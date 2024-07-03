
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

const corsOptions = {
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Go to http://localhost:${port}/api/fetch-json to get JSON data`)
})

app.get('/api/fetch-json', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = response.data;

    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    res.status(500).json({ error: 'Failed to fetch JSON' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/api/fetch-json`);
});
