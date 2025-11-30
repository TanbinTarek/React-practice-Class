export default function Post({ post }) {
    const {title,body,userId} = post
    return (
        <div className="card">
            <h2>User ID : {userId}</h2>
            <h4>Title : {title}</h4>
            <p>Body : {body} </p>
        </div>
    )
}