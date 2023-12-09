import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./Components/App";
import { Home } from "./Components/Home";
import { Shop } from "./Components/Shop";
import { Cart } from "./Components/Cart";
import { Layout } from "./Components/Layout";
import { ErrorPage } from "./Components/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />{" "}
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: "cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
