import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import { Button } from "antd";
import { AuthContext } from "../context";
import MyButton from "../components/UI/button/Button";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="login" />
        <MyInput type="text" placeholder="password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
