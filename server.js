import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import winston from 'winston';
import bodyParser from 'body-parser';
import routes from './server/routes/index';

dotenv.config();

const PORT = process.env.PORT || 2500;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);
app.get('/api/v1', (_, res) => {
  res.status(200).json({
    message: 'Welcome to sms-manager Api'
  });
});

app.listen(PORT, () => {
  winston.info(`app is running on port ${PORT}`);
});

export default app;
