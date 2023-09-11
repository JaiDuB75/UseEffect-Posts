import React from "react";

function ListPosts({ user = {}, posts }) {
  if (posts.length) {
    return (
      <>
        <h3>Posts</h3>
        <ol>
          {posts.map((post) => {
            return (
              <li>
                Title: {post.title} Body: {post.body}
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}

export default ListPosts;
