const Joi = require('@hapi/joi');

const bookSchema = Joi.object().keys({
  ['book_name']: Joi.string(),
  ['book_author']: Joi.string()
});

exports.validateBookUpdate = (book) => {
  const { error } = bookSchema.validate(book);
  if (error === undefined) {
    return true;
  }
  return error;
};
