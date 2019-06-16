import contactsRoutes from './contactsRoutes';
import smsRoutes from './smsRoutes';

const apiPrefix = '/api/v1';
const routes = (app) => {
  app.use(apiPrefix, contactsRoutes);
  app.use(apiPrefix, smsRoutes);

  app.use('*', (_, res) => res.status(404).json({
    success: false,
    error: 'This routes does not exist'
  }));
  return app;
};

export default routes;
