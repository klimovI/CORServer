const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 1337;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { url } = req.body;

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
});
