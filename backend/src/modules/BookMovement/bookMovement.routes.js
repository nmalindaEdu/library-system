const { config } = require('../../config');
const { create, list, update } = require('./bookMovement.controller');

exports.bookMovementRoutes = (app) => {
  app
    .route(`${config.app.apiBase}/bookmovements`)
    .post(create)
    .get(list);
  app.route(`${config.app.apiBase}/bookmovements/:Bid`).put(update);
};
