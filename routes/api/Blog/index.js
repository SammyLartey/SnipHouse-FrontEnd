const blogRouter = require('express').Router();

blogRouter.use('/fetch-blogs', require('./fetch-blogs'));

module.exports = blogRouter;
