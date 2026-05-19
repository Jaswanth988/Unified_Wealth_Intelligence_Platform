import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Equity Service Running');
});

app.get('/health', (_, res) => {
  res.json({
    service: 'equity-service',
    status: 'UP'
  });
});

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Equity Service running on ${PORT}`);
});