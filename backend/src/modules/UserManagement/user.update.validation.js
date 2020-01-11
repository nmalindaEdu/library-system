const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  ['user_full_name']: Joi.string(),
  ['user_tel_no']: Joi.string().pattern(new RegExp(/^[0]\d{9}$/)),
  ['user_name']: Joi.string(),
  ['user_password']: Joi.string().alphanum()
});

exports.validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error === undefined) {
    return true;
  }
  return error;
};
