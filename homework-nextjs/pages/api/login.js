import {PrismaClient} from '@prisma/client'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const {email, password} = req.body
    const checkUser = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    if (checkUser) {
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if (checkPassword) {
            const payload = {
                userId: checkUser.id,
                name: checkUser.name,
                email: checkUser.email
            }
            const token = jwt.sign(payload, "ini rahasia")
            res.json({
                token : token
            })
        } else {
            res.json({error: "Invalid credentials"})
        }
    } else {
        res.json({error: "Invalid credentials"})
    }
}