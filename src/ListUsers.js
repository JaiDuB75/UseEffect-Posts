import React from "react";

function ListUsers({ users, setCurrentUser }) {
    //console.log(users)
  return (
    <>
      <h2>Users</h2>
      <ol>
        {users.map((user) => (
          <li>
            <button type="button" onClick={() => setCurrentUser(user)}>
               User: {user.name}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ListUsers;
