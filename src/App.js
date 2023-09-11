import React, { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import ListPosts from "./ListPosts";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  //load users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);


  //load posts
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`)
    .then((response) => response.json())
    .then(setPosts)
    .catch((error) => {
      console.log(error);
    })
  }, [currentUser.id]);


  return (
    <>
      <h1>Welcome</h1>
      <ListUsers users={users} setCurrentUser={setCurrentUser} />
      <ListPosts user={currentUser} posts={posts}/>
    </>
  );
}

export default App;
