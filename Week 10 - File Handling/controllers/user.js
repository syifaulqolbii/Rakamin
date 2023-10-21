const {users} = require('../models');

module.exports = {
    findAllUsers: async (req, res) => {
        try {
            const result = await users.findAll();
            res.status(200).json({
                message: "Success get all users",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    createUser: async (req, res) => {
        try {
            const {email, password, role, gender} = req.body;

            const result = await users.create({
                email,
                password,
                role,
                gender
            });
            res.status(201).json({
                message: "Success add user",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    updateUser: async (req, res) => {
        try {
            const {id} = req.params;
            const {email, password, role, gender} = req.body;

            const result = await users.update({
                email,
                password,
                role,
                gender
            }, {
                where: {id}
            });
            res.status(200).json({
                message: "Success update user",
                data: result
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const {id} = req.params;

            const result = await users.destroy({
                where: {id}
            });
            res.status(200).json({
                message: "Success delete user",
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