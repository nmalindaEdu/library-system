const knex = require('../../database');
const { format } = require('date-fns');
const { validateUser } = require('./user.validation');

exports.create = async (req, res) => {
  let newUser = req.body;
  const validationResult = validateUser(newUser);
  const date = format(new Date(), 'yyyy-MM-dd');

  if (validationResult === true) {
    try {
      newUser = {
        ['user_full_name']: newUser.user_full_name,
        ['user_tel_no']: newUser.user_tel_no,
        ['user_name']: newUser.user_name,
        ['user_password']: knex.raw(`SHA2(${newUser.user_password},224)`),
        ['user_privilege']: 'member',
        ['user_added_date']: date
      };

      knex.transaction((trx) => {
        return trx
          .insert(newUser)
          .into('user')
          .then(trx.commit)
          .catch(trx.rollback);
      });

      res.json({
        status: 200,
        success: true,
        error: {},
        message: 'New User Created Successfully'
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.json({
      status: 'ERROR',
      success: false,
      error: {
        errorCode: 422,
        errorMessage: validationResult,
        reference: 'User Validation Reference'
      }
    });
  }
};
