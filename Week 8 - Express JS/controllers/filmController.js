const {film} = require('../models');

module.exports = {
    getAllFilms: async (req, res) => {
        try {
            const films = await film.findAll();
            res.render('films.ejs', {films});
        } catch (error) {
            console.log(error);
        }
    },
    getFilmById: async (req, res) => {
        const filmId = req.params.id;

        try {
            const selectedFilm = await film.findByPk(filmId);
            if (!selectedFilm) {
                return res.status(404).send('Film not found');
            }else {
                res.render('filmDetails.ejs', {selectedFilm});
            }
        }catch (error) {
            console.log(error);
        }
    }
}