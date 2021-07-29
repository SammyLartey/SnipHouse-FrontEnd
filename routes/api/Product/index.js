const productRouter = require('express').Router();

productRouter.use('/fetch-products', require('./fetch-products'));
productRouter.use('/fetch-category', require('./fetch-category'));

module.exports = productRouter;
