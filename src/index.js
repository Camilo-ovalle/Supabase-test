import express from 'express';
import 'dotenv/config';

import userRouter from './routes/users.routes.js';

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.use('/rest/v1', userRouter);
