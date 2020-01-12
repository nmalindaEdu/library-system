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
      .select(
        'user_id',
        'user_full_name',
        'user_tel_no',
        'user_name',
        'user_privilege',
        'user_added_date'
      )
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

exports.userById = async (req, res, next, id) => {
  try {
    const user = await knex('user')
      .select(
        'user_id',
        'user_full_name',
        'user_tel_no',
        'user_name',
        'user_privilege',
        'user_added_date'
      )
      .where('user_id', req.params.user)
      .first();

    if (user && user.length !== 0) {
      req.user = user;
      next();
    } else {
      res.status(200).json({
        error: 'error found',
        message: `This user id ${id} is not found`,
        success: false
      });
      next(new Error(`This user id ${id} is not found`));
    }
  } catch (error) {
    next(error);
  }
};

exports.listEach = async (req, res) => {
  res.status(200).json(req.user);
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
        if (checkDuplicate[0].user_id === parseInt(req.params.user, 0)) {
          await knex('user')
            .where('user_id', req.params.user)
            .update({
              ...user,
              ['user_password']: knex.raw(`SHA2(${user.user_password},224)`)
            });

          res.json({
            status: 200,
            success: true,
            data: { ...user },
            error: {},
            message: `The user id ${req.params.user} is Updated successfully`
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
          .where('user_id', req.params.user)
          .update({
            ...user,
            ['user_password']: knex.raw(`SHA2(${user.user_password},224)`)
          });

        res.json({
          status: 200,
          success: true,
          data: { ...user },
          error: {},
          message: `The user id ${req.params.user} is Updated successfully`
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

exports.deleteUser = async (req, res) => {
  await knex('user')
    .where('user_id', req.params.user)
    .del();

  res.json({
    status: 200,
    success: true,
    error: {},
    message: `User ${req.params.user} Successfully Deleted`
  });
};
