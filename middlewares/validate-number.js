'use strict';

// create a module to export the middleware to validate numbers
module.exports = () => {
  return (req, res, next) => {
    // check if the query string has a number
    if (!isNaN(+req.query.number)) {
      // if it does, convert it to a number and store it in the request object
      req.squareNum = Number(req.query.number);
      // call next to move on to the next middleware
      next();
    } else {
      // if there is no number, send an error
      next('No number provided');
    }
  };
};


