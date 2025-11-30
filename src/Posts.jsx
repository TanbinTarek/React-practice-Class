import { use } from 'react'
import './App.css'
import Post from './Post'
export default function Friends({ postsPromise }) {
    const posts = use(postsPromise)
    console.log(posts)
    return (
        <div className='card'>
            <h3>posts : {posts.length}</h3>
            {
               posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}
// friends.map(friend =><Friend key={friend.id} friend={friend}></Friend>)