/* eslint-disable require-jsdoc */
import database from '../models';

const { Contact } = database;

class ContactController {
  static async createContact(req, res) {
    const { id, name, phoneNumber } = req.body;
    const createdContact = Contact.create(id, name, phoneNumber);
    return res.status(201).json({
      message: 'contact created successfully',
      status: true,
      contact: await createdContact
    });
  }

  static async getOneContact(req, res) {
    const { id } = req.params;
    const oneContact = Contact.findOne({
      where: {
        id
      }
    });
    return res.status(200).json({
      message: 'Single contact retrieved successfully',
      status: true,
      singleContact: oneContact
    });
  }
}

export default ContactController;
