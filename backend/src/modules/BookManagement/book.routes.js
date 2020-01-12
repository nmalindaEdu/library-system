const { config } = require('../../config');
const {
  create,
  list,
  update,
  deleteBook,
  bookById,
  listEach
} = require('./book.controller');

exports.bookRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/books`)
    .post(create)
    .get(list);
  app
    .route(`${config.app.apiBase}/books/:book`)
    .get(listEach)
    .put(update)
    .delete(deleteBook);

  app.param(`book`, bookById);
};
