const { config } = require('../../config');
const {
  create,
  list,
  update,
  deleteUser,
  userById,
  listEach
} = require('./user.controller');

exports.userRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/users`)
    .post(create)
    .get(list);
  app
    .route(`${config.app.apiBase}/users/:user`)
    .get(listEach)
    .put(update)
    .delete(deleteUser);

  app.param(`user`, userById);
};
