export default function Friend({ friend }) {
    const { name, email, username } = friend
    return (
        <div className="card">
            <h4>Name : {name}</h4>
            <p>E-mail : {email}</p>
            <p>UserName : {username}</p>
        </div>
    )
}