import React from "react";
import PostItem from "./PostItem";

const PostLIst = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => (
        <PostItem />
      ))}
    </div>
  );
};

export default PostLIst;
