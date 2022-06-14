import express from 'express';
import getRates from './utils/getRates.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/rates', async (req, res) => {
  const base = req.query.base;
  const amount = req.query.amount;
  const result = await getRates(base, amount);

  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  res.status(result.code).json(result.data);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})