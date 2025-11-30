import { use } from 'react'
import './App.css'
export default function Users({ fetchUsers }) {
    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="card">
            <h3>Users : {users.length}</h3>
        </div>
    )
}