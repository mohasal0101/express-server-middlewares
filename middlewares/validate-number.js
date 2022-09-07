'use strict';

module.exports = () => {
  return (req, res, next) => {
    if (!isNaN(+req.query.num)) {
      console.log(`${+req.query.num} is a ${typeof +req.query.num}`);
      req.squareNum = Math.pow(+req.query.num, 2);
      next();
    } else {
      next(`${req.query.num} is not a number`);
    }
  };
};