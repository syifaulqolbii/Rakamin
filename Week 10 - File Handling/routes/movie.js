const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movie');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/', MovieController.findAllMovies);
router.post('/', upload.single('photo'), MovieController.createMovie);
router.put('/:id', upload.single('photo'), MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;