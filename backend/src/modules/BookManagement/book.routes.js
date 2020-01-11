const { config } = require('../../config');
const { create, list, update, deleteBook } = require('./book.controller');

exports.bookRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/books`)
    .post(create)
    .get(list);
  app
    .route(`${config.app.apiBase}/books/:bookId`)
    .put(update)
    .delete(deleteBook);
};
