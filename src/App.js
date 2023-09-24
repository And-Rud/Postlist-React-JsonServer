import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PostLIst from "./components/PostLIst";

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4500/posts")
      .then((e) => {
        setPosts(e.data);
        console.log(e.data);
      })
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div className="element">
      <PostLIst posts={posts} />
    </div>
  );
}

export default App;
