import axios from "axios";
import React, { useRef, useState } from "react";
import Button from "./UI/button/Button";

const PostItem = (props) => {
  const postRef = useRef();
  const [isDelete, setIsDelete] = useState(false);
  const handleRemote = () => {
    setIsDelete(true);

    postRef.current.remove();
    axios
      .delete(`http://localhost:4000/posts/${props.id}`)
      .then((response) => {
        console.log("Пост був видалений успішно");
      })
      .catch((error) => {
        console.error("Сталася помилка під час видалення поста:", error);
      });
    setIsDelete(false);
  };
  return (
    <div ref={postRef} className="main">
      {!isDelete ? (
        <div className="container">
          <strong className="title">
            {props.id}. {props.title}
          </strong>
          <div className="body">{props.body}</div>
        </div>
      ) : (
        <div>Post remove</div>
      )}
      <Button onClick={handleRemote} id={props.id}>
        remove
      </Button>
    </div>
  );
};

export default PostItem;
