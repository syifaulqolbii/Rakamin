const {users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const allUser = await users.findAll();
            res.status(200).json(allUser);
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
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const isUser = await users.findOne({
                where: {
                    email: email
                }
            });

            if (!isUser) {
                return res.status(400).json({ error: 'Email or Password not found or not match' });
            } else {
                const validPassword = await bcrypt.compare(password, isUser.password);
                if (!validPassword) {
                    return res.status(400).json({ error: 'Email or Password not found or not match' });
                } else {
                    const token = jwt.sign({ id: isUser.id, email: isUser.email, role: isUser.role }, "secretkey");
                    res.status(200).json({
                        message: 'Login success',
                        token: token,
                    });
                }
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}