const knex = require('../../database');
const { format } = require('date-fns');
const { validateBook } = require('./book.validation');
const { validateBookUpdate } = require('./book.update.validation');

exports.create = async (req, res) => {
  let newBook = req.body;
  const validationResult = validateBook(newBook);
  const date = format(new Date(), 'yyyy-MM-dd');

  if (validationResult === true) {
    try {
      newBook = {
        ['book_name']: newBook.book_name,
        ['book_author']: newBook.book_author,
        ['book_added_date']: date,
        ['book_status']: 'available'
      };

      knex.transaction((trx) => {
        return trx
          .insert(newBook)
          .into('book')
          .then(trx.commit)
          .catch(trx.rollback);
      });

      res.json({
        status: 200,
        success: true,
        error: {},
        message: 'New Book Created Successfully'
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
        reference: 'Book Validation Reference'
      }
    });
  }
};

exports.list = async (req, res) => {
  try {
    const books = await knex('book')
      .select('*')
      .modify((query) => {
        if (req.query.bookStatus !== 'All') {
          query.where('book_status', req.query.bookStatus);
        }
      });

    if (books && books.length !== 0) {
      res.json({
        status: 200,
        success: true,
        data: books,
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
          reference: 'Book Reference'
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.bookById = async (req, res, next, id) => {
  try {
    const book = await knex('book')
      .select('*')
      .where('book_id', req.params.book)
      .first();

    if (book && book.length !== 0) {
      req.book = book;
      next();
    } else {
      res.status(200).json({
        error: 'error found',
        message: `This book id ${id} is not found`,
        success: false
      });
      next(new Error(`This book id ${id} is not found`));
    }
  } catch (error) {
    next(error);
  }
};

exports.listEach = async (req, res) => {
  res.status(200).json(req.book);
};

exports.update = async (req, res) => {
  const book = req.body;
  const checkDuplicate = await knex('book')
    .select('book_id')
    .where('book_name', book.book_name);

  const validationUpdateResult = validateBookUpdate(book);
  if (validationUpdateResult === true) {
    try {
      if (checkDuplicate.length === 1) {
        if (checkDuplicate[0].book_id === parseInt(req.params.bookId, 0)) {
          await knex('book')
            .where('book_id', req.params.bookId)
            .update(book);

          res.json({
            status: 200,
            success: true,
            data: { ...book },
            error: {},
            message: `The book id ${req.params.bookId} is Updated successfully`
          });
        } else {
          res.json({
            status: 'ERROR',
            success: false,
            data: {},
            error: {
              errorCode: 404,
              errorMessage: 'Duplicate book name',
              reference: 'Book Update Reference'
            }
          });
        }
      } else if (checkDuplicate.length === 0) {
        await knex('book')
          .where('book_id', req.params.bookId)
          .update(book);

        res.json({
          status: 200,
          success: true,
          data: { ...book },
          error: {},
          message: `The book id ${req.params.bookId} is Updated successfully`
        });
      } else {
        res.json({
          status: 'ERROR',
          success: false,
          data: {},
          error: {
            errorCode: 404,
            errorMessage: 'Duplicate book name',
            reference: 'Book Update Reference'
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
        reference: 'Book Update Validation Reference'
      }
    });
  }
};

exports.deleteBook = async (req, res) => {
  await knex('book')
    .where('book_id', req.params.bookId)
    .del();

  res.json({
    status: 200,
    success: true,
    error: {},
    message: `Book ${req.params.bookId} Successfully Deleted`
  });
};
