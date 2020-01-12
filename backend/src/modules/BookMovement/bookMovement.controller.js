const knex = require('../../database');
const { format } = require('date-fns');
const { validateBookMovement } = require('./bookmovement.validation');

exports.create = async (req, res) => {
  let bookMovements = req.body;
  const validationResult = validateBookMovement(bookMovements);
  const date = format(new Date(), 'yyyy-MM-dd');
  const time = knex.raw('CURTIME()');

  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 14);
  const mustReturnDate = format(returnDate, 'yyyy-MM-dd');

  if (validationResult === true) {
    try {
      bookMovements = {
        ['book_movement_book_id']: bookMovements.book_movement_book_id,
        ['book_movement_issuer_id']: bookMovements.book_movement_issuer_id,
        ['book_movement_borrower_id']: bookMovements.book_movement_borrower_id,
        ['book_movement_issue_date']: date,
        ['book_movement_issue_time']: time,
        ['book_movement_must_return_date']: mustReturnDate,
        ['book_movement_is_returned']: 'No'
      };

      knex.transaction((trx) => {
        return trx
          .insert(bookMovements)
          .into('book_movement')
          .then(() => {
            return trx('book')
              .update('book_status', 'not available')
              .where('book_id', bookMovements.book_movement_book_id);
          })
          .then(trx.commit)
          .catch(trx.rollback);
      });
      res.json({
        status: 200,
        success: true,
        error: {},
        message: 'Book Issued Successfully'
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
        reference: 'Book Movement Validation Reference'
      }
    });
  }
};

exports.list = async (req, res) => {
  try {
    const bookMovements = await knex('book_movement')
      .select(
        'book_name',
        'user_full_name',
        'book_movement_issue_date',
        'book_movement_must_return_date',
        'book_movement_is_returned'
      )
      .join('book', 'book_id', 'book_movement_book_id')
      .join('user', 'user_id', 'book_movement_borrower_id')

      .modify((query) => {
        if (req.query.booking !== 'All') {
          query.where('book_movement_is_returned', req.query.booking);
        }
      });

    if (bookMovements && bookMovements.length !== 0) {
      res.json({
        status: 200,
        success: true,
        data: bookMovements,
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
          reference: 'Book Movement Reference'
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.update = async (req, res) => {
  try {
    await knex('book')
      .where('book_id', req.params.Bid)
      .update('book_status', 'available');

    await knex('book_movement')
      .where('book_movement_book_id', req.params.Bid)
      .update('book_movement_is_returned', 'Yes');

    res.json({
      status: 200,
      success: true,
      error: {},
      message: `The book is returned and available now`
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
