const {category} = require('../models');
const {film} = require('../models');

module.exports = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await category.findAll();
            res.render('categories.ejs', {categories});
        } catch (error) {
            console.log(error);
        }
    },

    showFilmByCategory: async (req, res) => {
        try {
            const id = req.params.id;
            const filmsInCategory = await film.findAll({
                where: {
                    category_id: id
                }
            });
            const categoryById = await category.findByPk(id);
            res.render('filmByCategory.ejs', { filmsInCategory, categoryById });
        } catch (error) {
            console.error(error);
        }
    }
}