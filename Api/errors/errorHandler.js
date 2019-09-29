module.exports = function errorHandler(res, error) {
  console.log(error);
  if (error.name == 'Unauthorized' || error.name == 'TokenExpiredError') {
    return res.status(401).json({
      errors: {
        type: 'Unauthorized',
        errors: [
          {
            msg: error.message,
            value: error.value || 'token',
            location: error.location || 'headers',
            param: error.param
          }
        ]
      }
    });
  } else if (error.name == 'Bad Request') {
    return res.status(400).json({
      errors: {
        type: 'Bad Request',
        errors: [{ msg: error.message, value: error.value, location: error.location, param: error.param }]
      }
    });
  } else if (error.name == 'Error') {
    return res.status(400).json({
      errors: {
        type: 'Bad Request',
        errors: error.errors
      }
    });
  } else {
    return res.status(500);
  }
};

// TokenExpiredError: jwt expired
// name: 'TokenExpiredError',
// message: 'jwt expired',
// expiredAt: 2019-09-29T02:41:43.000Z
