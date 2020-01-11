const knex = require('../../database');
const { validateUser } = require('./user.validation');

exports.create = async (req, res) => {
  let newUser = req.body;
  const validationResult = validateUser(newUser);
  const date = format(new Date(), 'yyyy-MM-dd');

  if (validationResult === true) {
    try {
      newUser = {
        ['user_name']: newUser['user_name'],
        ['user_password']: knex.raw(`SHA2(${newUser['user_password']},224)`),
        ['user_privilege']: newUser['user_privilege'],
        ['user_added_date']: date
      };
      knex.transaction((trx) => {
        return knex('user')
          .transacting(trx)
          .insert(newUser)
          .then(trx.commit)
          .catch(trx.rollback);
      });

      res.json({
        status: 200,
        success: true,
        id: userId,
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
