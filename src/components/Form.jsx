import React, { useRef, useState } from "react";
import Button from "./UI/button/Button";
import MyInput from "./UI/input/MyInput";
import axios from "axios";

const Form = ({ children, create, posts, page, ...props }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const myref = document.querySelector("#fin");
    setTimeout(() => myref.focus(), 1000);

    var newPost = { ...post, id: "n" };
    create(newPost);
    axios.post("http://localhost:4000/posts", { ...post });
    setPost({ title: "", body: "" });
  };
  return (
    <form className="form">
      <MyInput
        id="fin"
        value={post.title}
        placeholder="title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        placeholder="description"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button onClick={addNewPost}>Post</Button>
    </form>
  );
};

export default Form;
