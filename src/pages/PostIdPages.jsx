import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../components/hooks/useFetching";
import POstService from "../API/POstService";

const PostIdPages = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const res = await POstService.getById(params.id);
    setPost(res.data);
  });

  const [fetchComment, isComLoading, comError] = useFetching(async () => {
    const res = await POstService.getCommentById(params.id);
    setComments(res.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
  }, []);
  return (
    <div>
      <h1>You open post ID={params.id}</h1>
      {post ? (
        <div>
          {post.id}. {post.title}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {isComLoading ? <div>Loading...</div> : <h1>Comment</h1>}
    </div>
  );
};

export default PostIdPages;
