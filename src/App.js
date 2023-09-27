import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostLIst from "./components/PostLIst";
import Form from "./components/Form";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./components/hooks/usePost";
import PostService from "./API/PostService";
import { Pagination, Spin } from "antd";
import useFetching from "./components/hooks/useFetching";
import { getPageCount } from "./components/utils/pages";

function App() {
  const [posts, setPosts] = useState();
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    let res = await PostService.getAll(limit, page);
    setPosts(res);
    const totalCount = res.length;
    setTotalPage(getPageCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className="element">
      <Button onClick={() => setModal(true)}>Create Post</Button>
      <MyModal visible={modal} setVisible={setModal}>
        <Form create={createPost} posts={posts} page={page} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <Button onClick={() => changePage(page - 1)}>previous page</Button>
      <Button onClick={() => changePage(page + 1)}>next page</Button>
      {postError && <h1>Error{postError}</h1>}
      {!isPostLoading ? (
        <PostLIst posts={sortedAndSearchPosts} />
      ) : (
        <Spin size="large" />
      )}
      <Pagination page={page} changePage={changePage} totalPage={totalPage} />
    </div>
  );
}

export default App;
