const { format } = require('date-fns');

exports.seed = async (knex) => {
  const date = format(new Date(), 'yyyy-MM-dd');
  return knex('user')
    .del()
    .then(() => {
      return knex('user').insert([
        {
          ['user_full_name']: 'Niroshan Malinda',
          ['user_tel_no']: '0714012234',
          ['user_name']: 'admin',
          ['user_password']: knex.raw(`SHA2('123',224)`),
          ['user_privilege']: 'admin',
          ['user_added_date']: date
        },
        {
          ['user_full_name']: 'Saman kumara',
          ['user_tel_no']: '0717019214',
          ['user_name']: 'malindap',
          ['user_password']: knex.raw(`SHA2('321',224)`),
          ['user_privilege']: 'admin',
          ['user_added_date']: date
        }
      ]);
    });
};
