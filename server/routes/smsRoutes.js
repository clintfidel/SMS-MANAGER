import express from 'express';
import smsController from '../controllers/Sms';

const { sendSms, deleteSms, getAllSms } = smsController;
const smsRoutes = express.Router();
const apiPrefix = '/sms';

smsRoutes.route(`${apiPrefix}/send/:contactId`).post(sendSms);
smsRoutes.route(`${apiPrefix}/delete/:smsId`).delete(deleteSms);
smsRoutes.route(`${apiPrefix}/all`).get(getAllSms);


export default smsRoutes;
