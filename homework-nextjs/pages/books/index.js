const Books = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: event.target.name.value,
                author: event.target.author.value,
            }),
        })

        window.location.href = '/'
    }

    return (
            <div className="p-8 max-w-md mx-auto bg-white rounded shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Insert Books</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Book Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter book name"
                        />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-600">
                            Author:
                        </label>
                        <input
                            type="text"
                            name="author"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter author name"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Books