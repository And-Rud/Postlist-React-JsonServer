import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { SwitchTransition } from "react-transition-group";

import { privatRoutes, routes } from "../router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth
        ? privatRoutes.map((route) => (
            <Route
              path={route.path}
              Component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))
        : routes.map((route) => (
            <Route
              path={route.path}
              Component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
