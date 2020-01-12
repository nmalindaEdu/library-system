const { format } = require('date-fns');

exports.seed = async (knex) => {
  const date = format(new Date(), 'yyyy-MM-dd');
  const time = knex.raw('CURTIME()');

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 14);
  const mustReturnDate = format(returnDate, 'yyyy-MM-dd');
  return knex('book')
    .del()
    .then(() => {
      return knex('book').insert([
        {
          ['book_movement_book_id']: 3,
          ['book_movement_issuer_id']: 1,
          ['book_movement_borrower_id']: 3,
          ['book_movement_issue_date']: date,
          ['book_movement_issue_time']: time,
          ['book_movement_must_return_date']: mustReturnDate,
          ['book_movement_is_returned']: 'Yes'
        },
        {
          ['book_movement_book_id']: 2,
          ['book_movement_issuer_id']: 1,
          ['book_movement_borrower_id']: 3,
          ['book_movement_issue_date']: date,
          ['book_movement_issue_time']: time,
          ['book_movement_must_return_date']: mustReturnDate,
          ['book_movement_is_returned']: 'No'
        }
      ]);
    });
};
