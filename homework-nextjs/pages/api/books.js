import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    switch (req.method) {
        case 'GET':
            const books = await prisma.book.findMany()
            res.json(books)
            break
        case 'POST':
            const book = await prisma.book.create({
                data: {
                    title: req.body.title,
                    author: req.body.author,
                },
            })
            res.json(book)
            break
        default:
            res.status(405).end() //Method Not Allowed
            break
    }
}