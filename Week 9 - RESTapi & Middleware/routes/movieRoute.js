const route = require('express').Router();
const movieController = require('../controllers/movieController');

route.get('/', movieController.getAllMovies);
route.get('/:id', movieController.getMovieById);
route.post('/addMovie', movieController.addMovie);
route.patch('/editMovie/:id', movieController.updateMovie);
route.delete('/deleteMovie/:id', movieController.deleteMovie);

module.exports = route;