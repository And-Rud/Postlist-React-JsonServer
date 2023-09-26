import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostLIst = ({ posts }) => {
  if (posts != null) {
    return (
      <div>
        <TransitionGroup>
          {posts.map((item, index) => (
            <CSSTransition key={index + 1} timeout={500} classNames="item">
              <PostItem id={index + 1} title={item.title} body={item.body} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  } else {
    <p>Завантаження...</p>;
  }
};

export default PostLIst;
