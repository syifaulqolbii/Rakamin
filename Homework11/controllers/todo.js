const {todos} = require('../models');

module.exports = {
    findAllTodos: async (req, res, next) => {
        // hanya menampilkan todo yang statusnya true karena yang statusnya false dianggap sudah dihapus
        try {
            const allTodos = await todos.findAll({where: {status: true}});
            res.status(200).json({
                message: 'Success',
                data: allTodos
            });
        } catch (error) {
            next(error);
        }
    },

    findOneTodo: async (req, res, next) => {
        try {
            const {id} = req.params;
            const todo = await todos.findOne({where: {id: id}});
            if (todo) {
                res.status(200).json({
                    message: 'Success',
                    data: todo
                });
            } else {
                throw new Error('Todo not found');
            }
        } catch (error) {
            next(error);
        }
    },

    createTodo: async (req, res, next) => {
        try {
            const newTodo = await todos.create(req.body);
            res.status(200).json({
                message: 'Success',
                data: newTodo
            });
        } catch (error) {
            next(error);
        }
    },

    updateTodo: async (req, res, next) => {
        try {
            const {id} = req.params;
            const [updated] = await todos.update(req.body, {
                where: {id: id}
            });
            if (updated) {
                const updatedTodo = await todos.findOne({where: {id: id}});
                res.status(200).json({
                    message: 'Success',
                    data: updatedTodo
                });
            } else {
                throw new Error('Todo not found');
            }
        } catch (error) {
            next(error);
        }
    },

    deleteTodo: async (req, res, next) => {
        // implementasi safe delete dengan cara mengubah status todo menjadi false
        try {
            const {id} = req.params;

            const updatedTodo = await todos.update({status: false}, {
                where: {id: id}
            });

            if (updatedTodo[0] === 1) {
                res.status(200).json({
                    message: 'Success',
                    data: updatedTodo
                });
            } else {
                throw new Error('Todo not found');
            }
        } catch (error) {
            next(error);
        }
    }
}

