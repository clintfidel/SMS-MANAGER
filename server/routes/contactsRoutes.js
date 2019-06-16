import express from 'express';
import contactsController from '../controllers/Contacts';

const {
  getAllContact,
  getOneContact,
  createContact,
  updateOneList,
  deleteOneList
} = contactsController;
const apiPrefix = '/contacts';

const contactsRouter = express.Router();
contactsRouter
  .route(`${apiPrefix}/create`).post(createContact);
contactsRouter
  .route(`${apiPrefix}/update/:contactId`).put(updateOneList);
contactsRouter
  .route(`${apiPrefix}/delete/:contactId`).delete(deleteOneList);
contactsRouter
  .route(`${apiPrefix}/allcontacts`).get(getAllContact);
contactsRouter
  .route(`${apiPrefix}/onecontact/:contactId`).get(getOneContact);

export default contactsRouter;
