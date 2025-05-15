import { useState } from "react";

const Promise = () => {
  const [posts, setPosts] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));

  return (
    <div>
      {posts.map((posts) => {
        return (
          <div>
            <h1>{posts.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Promise;
