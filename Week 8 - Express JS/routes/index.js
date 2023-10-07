const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');
const categoryController = require('../controllers/categoryController');

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/films', filmController.getAllFilms);
router.get('/films/:id', filmController.getFilmById);

router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.showFilmByCategory);

module.exports = router;