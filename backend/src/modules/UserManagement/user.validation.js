const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  ['user_name']: Joi.string().required(),
  ['user_password']: Joi.string()
    .alphanum()
    .required(),
  ['user_privilege']: Joi.string().required(),
  ['user_added_date']: Joi.date().required()
});

exports.validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error === undefined) {
    return true;
  }
  return error;
};
