import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/api/books')
            .then((res) => res.json())
            .then((data) => setBooks(data))
    }, [])

    return (
        <div className="p-10">
            <div className="flex justify-between">
                <Link href="/login" className="btn btn-primary">
                    Login
                </Link>
                <Link href="/books" className="btn btn-accent">
                    Insert New Book
                </Link>
            </div>

            <h1 className="text-center text-5xl font-extrabold text-indigo-600 mt-6">Books</h1>
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4">Title</th>
                        <th className="py-2 px-4">Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="border-t border-gray-300">
                            <td className="py-2 px-4">{book.title}</td>
                            <td className="py-2 px-4">{book.author}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}