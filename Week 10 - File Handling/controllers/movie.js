const {movie} = require('../models');

module.exports = {
    findAllMovies: async (req, res) => {
        try {
            const result = await movie.findAll();
            res.status(200).json({
                message: "Success get all movies",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    createMovie: async (req, res) => {
        try {
            const {title, genres, year} = req.body;
            const photo = req.file.path;

            const result = await movie.create({
                title,
                genres,
                year,
                photo
            });
            res.status(201).json({
                message: "Success add movie",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    updateMovie: async (req, res) => {
        try {
            const {id} = req.params;
            const {title, genres, year} = req.body;
            const photo = req.file.path;

            const result = await movie.update({
                title,
                genres,
                year,
                photo
            }, {
                where: {id}
            });
            res.status(200).json({
                message: "Success update movie",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const {id} = req.params;

            const result = await movie.destroy({
                where: {id}
            });
            res.status(200).json({
                message: "Success delete movie",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    }
}