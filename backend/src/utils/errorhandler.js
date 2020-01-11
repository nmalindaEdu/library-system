exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(500).json({ status: 'ERROR', error: err.message });
};
