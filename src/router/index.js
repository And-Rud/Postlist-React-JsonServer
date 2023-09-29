import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Main from "../pages/Main";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privatRoutes = [
  { path: "/main", component: Main, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/*", component: Error, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPages, exact: true },
];

export const routes = [
  { path: "/login", component: Login, exact: true },
  { path: "/*", component: Login, exact: true },
];
