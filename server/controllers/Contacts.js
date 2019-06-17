/* eslint-disable require-jsdoc */
import database from '../models';

const { Contact } = database;

class ContactController {
  static async createContact(req, res) {
    try {
      const { name, phoneNumber } = req.body;
      const createdContact = await Contact.create({ name, phoneNumber });
      return res.status(201).json({
        message: 'contact created successfully',
        status: true,
        contact: createdContact
      });
    } catch (error) {
      return error;
    }
  }

  static async getOneContact(req, res) {
    try {
      const { contactId } = req.params;
      const oneContact = await Contact.findOne({
        where: {
          id: contactId
        }
      });
      return res.status(200).json({
        message: 'Single contact retrieved successfully',
        status: true,
        singleContact: oneContact
      });
    } catch (error) {
      return error;
    }
  }

  static async getAllContact(_, res) {
    try {
      const contacts = await Contact.findAll({});
      if (contacts) {
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
    } catch (error) {
      return error;
    }
  }

  static updateOneContact(req, res) {
    const { contactId } = req.params;
    const { name, phoneNumber } = req.body;
    Contact.findOne({
      where: {
        id: contactId
      },
      truncate: true
    })
      .then(foundContact => {
        if (foundContact) {
          foundContact.update({
            name: name || foundContact.name,
            phoneNumber: phoneNumber || foundContact.phoneNumber
          });
          res.status(200).json({
            message: 'Contact updated succesfully',
            status: true,
            updatedContact: foundContact
          });
        }
        res.status(404).json({
          message: 'Contact not found',
          status: false
        });
      }).catch(error => {
        throw new error(error);
      });
  }

  static deleteOneContact(req, res) {
    const { contactId } = req.params;
    Contact.findOne({
      where: {
        id: contactId
      },
      truncate: true
    })
      .then(foundContact => {
        if (foundContact) {
          foundContact.destroy({ id: contactId });
          res.status(200).json({
            message: 'Contact deleted succesfully',
            status: true,
            deletedContact: foundContact.id
          });
        }
        res.status(404).json({
          message: 'Contact not found',
          status: false
        });
      }).catch(error => {
        throw new error(error);
      });
  }
}

export default ContactController;
