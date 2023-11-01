const express = require('express');
const router = express.Router();

const MovieRouter = require('./movie');
const UserRouter = require('./user');

router.use('/movies', MovieRouter);
router.use('/users', UserRouter);

module.exports = router;