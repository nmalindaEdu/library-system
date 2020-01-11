const { format } = require('date-fns');

exports.seed = async (knex) => {
  const date = format(new Date(), 'yyyy-MM-dd');
  return knex('book')
    .del()
    .then(() => {
      return knex('book').insert([
        {
          ['book_name']: 'Sherlock Holmes 1',
          ['book_author']: 'Arthur conon doyle',
          ['book_added_date']: date,
          ['book_status']: 'available'
        },
        {
          ['book_name']: 'Pikaso Artistic',
          ['book_author']: 'Don martin',
          ['book_added_date']: date,
          ['book_status']: 'available'
        },
        {
          ['book_name']: 'Lost Animal Kingdom ',
          ['book_author']: 'John doe',
          ['book_added_date']: date,
          ['book_status']: 'available'
        }
      ]);
    });
};
