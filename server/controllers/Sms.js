/* eslint-disable array-callback-return */
/* eslint-disable require-jsdoc */
import database from '../models';

const { Sms, Contact } = database;

class SmsController {
  static async sendSms(req, res) {
    const { receiver, message } = req.body;
    const { senderId } = req.params;
    const allContact = await Contact.findAll({});
    const sender = await Contact.findOne({
      where: {
        id: senderId
      }
    });
    if (sender.phoneNumber === receiver) {
      res.status(422).json({
        message: 'Cannot send message to self',
        status: false
      });
    }
    if (allContact.length !== 0) {
      return allContact.map((contacts) => {
        if (contacts.phoneNumber !== receiver) {
          res.status(404).json({
            message: 'receiver contact not found',
          });
        }
      });
    }
    const sentSms = Sms.create({
      sender: sender.id,
      receiver: receiver,
      status: 'Sent',
      message,
    });
    return res.status(201).json({
      messgae: 'Sms sent successfully',
      status: true,
      SmsData: await sentSms
    });
  }
}

export default SmsController;
