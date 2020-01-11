const Joi = require('@hapi/joi');

const bookSchema = Joi.object().keys({
  ['book_name']: Joi.string().required(),
  ['book_author']: Joi.string().required()
});

exports.validateBook = (book) => {
  const { error } = bookSchema.validate(book);
  if (error === undefined) {
    return true;
  }
  return error;
};
