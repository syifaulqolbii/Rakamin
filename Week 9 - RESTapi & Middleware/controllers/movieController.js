const {movies} = require('../models');

module.exports = {
    getAllMovies: async (req, res) => {
        // adding pagination & limit to get all movies
        try {
            const {page, limit, condition, sort} = req.query;

            const pageNumber = parseInt(page) || 1;
            const itemsPerPage = parseInt(limit) || 10;

            const offset = (pageNumber - 1) * itemsPerPage;

            const moviesData = await movies.findAndCountAll({
                attributes: ['title', 'year', 'genres'],
                where: condition,
                order: sort,
                limit: itemsPerPage,
                offset: offset,
            });

            const totalPages = Math.ceil(moviesData.count / itemsPerPage);

            res.status(200).json({
                movies: moviesData.rows,
                count: limit,
                currentPage: pageNumber,
                totalPages: totalPages,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    },
    getMovieById: async (req, res) => {
        try {
            const movie = await movies.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    },
    addMovie: async (req, res) => {
        try {
            const {title, year, genres} = req.body;

            if (!title || !year || !genres) {
                return res.status(400).json({
                    message: "Missing required fields",
                });
            }

            const newMovie = await movies.create({
                title,
                year,
                genres,
            });

            res.status(200).json({
                message: "Movie has been added",
                data: newMovie,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    },
    updateMovie: async (req, res) => {
        try {
            const {title, year, genres} = req.body;

            if (!title || !year || !genres) {
                return res.status(400).json({
                    message: "Missing required fields",
                });
            }

            const updatedMovie = await movies.update({
                title,
                year,
                genres,
            }, {
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                message: "Movie has been updated",
                data: updatedMovie,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const deletedMovie = await movies.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({
                message: "Movie has been deleted",
                data: deletedMovie,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    }
}