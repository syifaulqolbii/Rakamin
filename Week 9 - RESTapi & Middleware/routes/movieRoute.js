const route = require('express').Router();
const movieController = require('../controllers/movieController');

route.get('/', movieController.getAllMovies);

module.exports = route;