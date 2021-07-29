const APIRouter = require('express').Router();

APIRouter.use('/product', require('./Product'));
APIRouter.use('/blog', require('./Blog'));
APIRouter.use('/order', require('./Order'));
APIRouter.use('/booking', require('./Booking'));

console.log('UK E commerce');
module.exports = APIRouter;
