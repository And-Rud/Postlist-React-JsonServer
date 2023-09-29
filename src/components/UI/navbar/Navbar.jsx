import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <Button>
        <Link to="/main">Main</Link>
      </Button>
      <Button>
        <Link to="/posts">Posts</Link>
      </Button>
      <Button>
        <Link to="/about">About</Link>
      </Button>
      <Button onClick={logout}>Exit </Button>
    </div>
  );
};

export default Navbar;
