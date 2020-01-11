const { format } = require('date-fns');

exports.seed = async (knex) => {
  const date = format(new Date(), 'yyyy-MM-dd');
  const password = knex.raw(`SHA2('123',224)`);
  return knex('user')
    .del()
    .then(() => {
      return knex('user').insert({
        ['user_name']: 'admin',
        ['user_password']: password,
        ['user_privilege']: 'admin',
        ['user_added_date']: date
      });
    });
};
