const orderRouter = require('express').Router();

orderRouter.use('/make-order', require('./make-order'));

module.exports = orderRouter;
