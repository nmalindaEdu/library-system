const Joi = require('@hapi/joi');

const bookMovementSchema = Joi.object().keys({
  ['book_movement_book_id']: Joi.number().required(),
  ['book_movement_issuer_id']: Joi.number().required(),
  ['book_movement_borrower_id']: Joi.number().required()
});

exports.validateBookMovement = (book) => {
  const { error } = bookMovementSchema.validate(book);
  if (error === undefined) {
    return true;
  }
  return error;
};
