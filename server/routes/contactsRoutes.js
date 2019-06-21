import express from 'express';
import contactsController from '../controllers/Contacts';

const {
  getAllContact,
  getOneContact,
  createContact,
  updateOneContact,
  deleteOneContact
} = contactsController;
const apiPrefix = '/contacts';

const contactsRouter = express.Router();
contactsRouter
  .route(`${apiPrefix}/create`).post(createContact);
contactsRouter
  .route(`${apiPrefix}/update/:contactId`).put(updateOneContact);
contactsRouter
  .route(`${apiPrefix}/delete/:contactId`).delete(deleteOneContact);
contactsRouter
  .route(`${apiPrefix}/allcontacts`).get(getAllContact);
contactsRouter
  .route(`${apiPrefix}/onecontact/:contactId`).get(getOneContact);

export default contactsRouter;
