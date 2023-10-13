const {movies} = require('../models');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const allMovie = await movies.findAll();
            res.status(200).json(allMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}