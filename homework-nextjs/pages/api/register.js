import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const { email,name,password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const result = await prisma.user.create({
        data: {
            email,
            name,
            password : hashedPassword,
        },
    })
    res.json(result)
}