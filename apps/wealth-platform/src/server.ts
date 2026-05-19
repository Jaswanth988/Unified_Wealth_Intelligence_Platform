import express from 'express';
import axios from 'axios';

const app = express();

app.get('/', (_, res) => {
  res.send('Wealth Platform Running');
});

app.get('/dashboard', async (_, res) => {
  try {
    const equity = await axios.get(
      'http://localhost:4001/health'
    );

    const mf = await axios.get(
      'http://localhost:4002/health'
    );

    res.json({
      wealthPlatform: 'UP',
      equityService: equity.data,
      mfService: mf.data
    });
  } catch (error) {
    res.status(500).json({
      message: 'One service failed'
    });
  }
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Wealth Platform running on ${PORT}`);
});