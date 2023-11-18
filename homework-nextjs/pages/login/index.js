import Link from "next/link";

const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const body = {
            email,
            password,
        };
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const result = await response.json();

        window.location.href = "/";
    }
    return (
        <div className="p-10">
            <h1 className="text-center text-5xl">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
                <label htmlFor="email" className="mt-4">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs mt-1"
                />
                <label htmlFor="password" className="mt-4">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs mt-1"
                />
                <button type="submit" className="btn btn-primary mt-6">Login</button>
            </form>
            <h2 className="text-center mt-6">
                Belum punya akun?{' '}
                <Link href="/register" className="text-sky-500">
                    Register dulu !!
                </Link>
            </h2>
        </div>
    )
}

export default Login