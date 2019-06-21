/* eslint-disable array-callback-return */
/* eslint-disable require-jsdoc */
import database from '../models';

const { Sms, Contact } = database;

class SmsController {
  static async sendSms(req, res) {
    const { receiver, message } = req.body;
    const { contactId } = req.params;
    const allContact = await Contact.findAll({});
    const sender = await Contact.findOne({
      where: {
        id: contactId
      }
    });
    if (sender.phoneNumber === receiver) {
      res.status(422).json({
        message: 'Cannot send message to self',
        status: false
      });
    }
    if (!receiver && allContact.length !== 0) {
      allContact.map((contacts) => {
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

  static deleteSms(req, res) {
    const { smsId } = req.params;
    Sms.findOne({
      where: {
        id: smsId
      },
      truncate: true
    })
      .then(foundSms => {
        if (foundSms) {
          foundSms.destroy({ id: smsId });
          return res.status(200).json({
            message: 'Sms deleted succesfully',
            status: true,
            deletedSms: foundSms.id
          });
        }
        res.status(404).json({
          message: 'Sms not found',
          status: false
        });
      }).catch(error => {
        throw error;
      });
  }

  static async getAllSms(_, res) {
    try {
      const sms = await Sms.findAll({});
      if (sms.length > 0) {
        return res.status(200).json({
          message: 'All Sms gotten successfully',
          status: true,
          allSms: sms
        });
      }
      res.status(404).json({
        message: 'Sms not found',
        status: false
      });
    } catch (error) {
      return error;
    }
  }
}

export default SmsController;
