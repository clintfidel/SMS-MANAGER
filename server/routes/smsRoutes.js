import express from 'express';
import smsController from '../controllers/Sms';

const { sendSms } = smsController;
const smsRoutes = express.Router();
const apiPrefix = '/sms';

smsRoutes.route(`${apiPrefix}/send/:senderId`).post(sendSms);

export default smsRoutes;
