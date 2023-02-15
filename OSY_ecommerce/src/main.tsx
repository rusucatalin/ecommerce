import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/LoginPage";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store/store";
import { Register } from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
