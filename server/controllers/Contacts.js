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
}

export default ContactController;
