const route = require('express').Router();
const movieController = require('../controllers/movieController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The not auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         genres:
 *           type: string
 *           description: The genres of the movie
 *         year:
 *           type: string
 *           description: The year of the movie
 *       example:
 *         id: 1
 *         title: "The Shawshank Redemption"
 *         genres: "Drama"
 *         year: "1994"
 */


/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The movies managing API
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Returns the list of all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * /movies/addMovie:
 *   post:
 *     summary: Add a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The movie title
 *               year:
 *                 type: string
 *                 description: The movie year
 *               genres:
 *                 type: string
 *                 description: The movie genres
 *             example:
 *               title: The Avengers
 *               year: 2012
 *               genres: Action, Adventure, Sci-Fi
 *     responses:
 *       200:
 *         description: The movie was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /movies/editMovie/{id}:
 *   put:
 *     summary: Edit a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the movie to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movies'
 *     responses:
 *       200:
 *         description: The movie was successfully edited
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /movies/deleteMovie/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the movie to delete
 *     responses:
 *       204:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Internal server error
 */




route.get('/', movieController.getAllMovies);
route.get('/:id', movieController.getMovieById);
route.post('/addMovie', movieController.addMovie);
route.patch('/editMovie/:id', movieController.updateMovie);
route.delete('/deleteMovie/:id', movieController.deleteMovie);

module.exports = route;