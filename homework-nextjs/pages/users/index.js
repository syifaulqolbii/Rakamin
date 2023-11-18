import {useEffect, useState} from "react";


export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch('/api/users');
            const users = await res.json();
            setUsers(users);
        };
        getUsers();
    }, []);


    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <a href={`/users/${user.id}`}>{user.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}