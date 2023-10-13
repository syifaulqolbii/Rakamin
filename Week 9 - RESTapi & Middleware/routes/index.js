const route = require('express').Router();
const userRoute = require('./userRoute');
const movieRoute = require('./movieRoute');

route.use('/users', userRoute);
route.use('/movies', movieRoute);

module.exports = route;