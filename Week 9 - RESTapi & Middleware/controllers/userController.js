const {users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    SECRET_KEY
} = process.env;

module.exports = {
    getAllUsers: async (req, res) => {
        // adding pagination & limit to get all users
        try {
            const {page, limit, condition, sort} = req.query;

            const pageNumber = parseInt(page) || 1;
            const itemsPerPage = parseInt(limit) || 10;

            const offset = (pageNumber - 1) * itemsPerPage;

            const usersData = await users.findAndCountAll({
                attributes: ['email', 'role', 'gender'],
                where: condition,
                order: sort,
                limit: itemsPerPage,
                offset: offset,
            });

            const totalPages = Math.ceil(usersData.count / itemsPerPage);

            res.status(200).json({
                users: usersData.rows,
                count: limit,
                currentPage: pageNumber,
                totalPages: totalPages,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await users.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    registerUser: async (req, res) => {
        try {
            const {id, password, email, role, gender} = req.body;

            if (!password || !email || !role || !gender || !id) {
                return res.status(400).json({error: 'Missing required fields'});
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await users.create({
                id,
                password: hashedPassword,
                email,
                role,
                gender
            });
            res.status(200).json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    loginUser: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await users.findOne({
                where: {
                    email : email,
                    password : password
                }
            });
            if (!user) {
                return res.status(400).json({error: 'User not found'});
            }
            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(400).json({error: 'Invalid password'});
            }
            const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
                gender: user.gender
            }
            const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1h'})
            res.status(200).json({
                message: 'Login success',
                token: token
            });
        }catch (err) {
            res.status(500).json(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            const {email, password, role, gender} = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const updateUser = await users.update({
                password: hashedPassword,
                email,
                role,
                gender,
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Update success',
                data: updateUser
            });

        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deleteUser = await users.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                message: 'Delete success',
                data: deleteUser
            });

        } catch (err) {
            res.status(500).json(err);
        }
    }
}