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

  static async getAllContact(_, res) {
    const contacts = Contact.findAll({});
    if (await contacts.length > 0) {
      return res.status(200).json({
        message: 'All contacts gotten successfully',
        status: true,
        allContacts: contacts
      });
    }
    res.status(404).json({
      message: 'Contact not found',
      status: false
    });
  }

  static async updateOneList(req, res) {
    const { id } = req.params;
    const { name, phoneNumber } = req.body;
    const foundContact = Contact.findOne({
      where: {
        id
      }
    });
    if (await foundContact) {
      const updateContact = Contact.update(name, phoneNumber);
      res.status(200).json({
        message: 'Contact updated succesfully',
        status: true,
        updatedContact: updateContact
      });
    }
    res.status(404).json({
      message: 'Contact not found',
      status: false
    });
  }

  static async deleteOneList(req, res) {
    const { id } = req.params;
    const foundContact = Contact.findOne({
      where: {
        id
      }
    });
    if (await foundContact) {
      const deleteContact = Contact.destroy(id);
      res.status(200).json({
        message: 'Contact deleted succesfully',
        status: true,
        deletedContact: deleteContact
      });
    }
    res.status(404).json({
      message: 'Contact not found',
      status: false
    });
  }
}

export default ContactController;
