const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/', todoController.findAllTodos);
router.get('/:id', todoController.findOneTodo);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;