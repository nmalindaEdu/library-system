const knex = require('../../database');
const { format } = require('date-fns');
const { validateUser } = require('./user.validation');
const { validateUserUpdate } = require('./user.update.validation');

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
      res.status(500).json({ error });
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

exports.list = async (req, res) => {
  try {
    const users = await knex('user')
      .select('*')
      .where('user_privilege', 'member');

    if (users && users.length !== 0) {
      res.json({
        status: 200,
        success: true,
        data: users,
        error: {}
      });
    } else {
      res.json({
        status: 'ERROR',
        success: false,
        data: [],
        error: {
          errorCode: 404,
          errorMessage: 'No any data found',
          reference: 'User Reference'
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.update = async (req, res) => {
  const user = req.body;
  const checkDuplicate = await knex('user')
    .select('user_id')
    .where('user_name', user.user_name);

  const validationUpdateResult = validateUserUpdate(user);
  if (validationUpdateResult === true) {
    try {
      if (checkDuplicate.length === 1) {
        if (checkDuplicate[0].user_id === parseInt(req.params.userId, 0)) {
          await knex('user')
            .where('user_id', req.params.userId)
            .update({
              ...user,
              ['user_password']: knex.raw(`SHA2(${user.user_password},224)`)
            });

          res.json({
            status: 200,
            success: true,
            data: { ...user },
            error: {},
            message: `The user id ${req.params.userId} is Updated successfully`
          });
        } else {
          res.json({
            status: 'ERROR',
            success: false,
            data: {},
            error: {
              errorCode: 404,
              errorMessage: 'Duplicate user name',
              reference: 'User Update Reference'
            }
          });
        }
      } else if (checkDuplicate.length === 0) {
        await knex('user')
          .where('user_id', req.params.userId)
          .update({
            ...user,
            ['user_password']: knex.raw(`SHA2(${user.user_password},224)`)
          });

        res.json({
          status: 200,
          success: true,
          data: { ...user },
          error: {},
          message: `The user id ${req.params.userId} is Updated successfully`
        });
      } else {
        res.json({
          status: 'ERROR',
          success: false,
          data: {},
          error: {
            errorCode: 404,
            errorMessage: 'Duplicate user name',
            reference: 'User Update Reference'
          }
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.json({
      status: 'ERROR',
      success: false,
      data: {},
      error: {
        errorCode: 422,
        errorMessage: validationUpdateResult,
        reference: 'User Update Validation Reference'
      }
    });
  }
};
