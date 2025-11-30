import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Bowler from './Bowler'
import Friends from './Friends'
import Users from './Users'
import Posts from './Posts'
import Counter from './Counter'



// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())


// const fetchFriend = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();

// }

// const fetchPosts = async () => {
//   const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
//   return res.json();

// }




function App() {

  // const postsPromise =fetchPosts();
  // const friendsPromise=fetchFriend();


  // function handleClick() {
  //   alert("I am Clicked")
  // }
  // const handleClick2 = () => {
  //   alert('I am also clicked 2')
  // }

  return (
    <>

      <h1>Vite + React</h1>
      
      
      
      
      
      
      
      
      
      {/* <Counter></Counter> */}




      {/* <Suspense fallback={<h3>All Post Are Loading.......</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}


      {/* <Suspense fallback={<h6>Waiting for message...</h6>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}


      {/* <Suspense fallback={<h3>Friends Are Coming for treat.....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}


      {/* <Batsman></Batsman>
      <Bowler></Bowler>
      <Suspense></Suspense> */}





      {/* 
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={function handleClick3 (){
        alert("I Am also clicked 3")
      }}>Click Me 3</button>
      <button onClick={() =>{
        alert("I am also Clicked 4 ")
      }}>Click Me 4</button>
 */}

    </>
  )
}

export default App