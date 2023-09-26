import { useEffect, useMemo, useState } from "react";
import "./App.css";
import axios from "axios";
import PostLIst from "./components/PostLIst";

import Form from "./components/Form";

import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./components/hooks/usePost";

function App() {
  const [posts, setPosts] = useState();
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((e) => {
        setPosts(e.data);
        console.log(e.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div className="element">
      <Button onClick={() => setModal(true)}>Create user</Button>
      <MyModal visible={modal} setVisible={setModal}>
        <Form create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {posts != null ? (
        <PostLIst posts={sortedAndSearchPosts} />
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
}

export default App;
