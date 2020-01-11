const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  ['user_full_name']: Joi.string().required(),
  ['user_tel_no']: Joi.string()
    .pattern(new RegExp(/^[0]\d{9}$/))
    .required(),

  ['user_name']: Joi.string().required(),
  ['user_password']: Joi.string()
    .alphanum()
    .required()
});

exports.validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error === undefined) {
    return true;
  }
  return error;
};
