import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('MF Service Running');
});

app.get('/health', (_, res) => {
  res.json({
    service: 'mf-service',
    status: 'UP'
  });
});

const PORT = 4002;

app.listen(PORT, () => {
  console.log(`MF Service running on ${PORT}`);
});