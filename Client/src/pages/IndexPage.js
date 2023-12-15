import React, { useEffect } from "react";
import { useState } from "react";
import Post from "../Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
};

export default IndexPage;
