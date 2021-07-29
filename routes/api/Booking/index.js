const productRouter = require('express').Router();

productRouter.use('/create-booking', require('./create-booking'));

module.exports = productRouter;
