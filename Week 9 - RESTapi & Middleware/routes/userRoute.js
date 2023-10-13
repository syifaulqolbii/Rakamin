const route = require('express').Router();
const userController = require('../controllers/userController');

route.get('/', userController.getAllUsers);
route.get('/:id', userController.getUserById);
route.post('/register', userController.registerUser);
route.post('/login', userController.loginUser);

module.exports = route;