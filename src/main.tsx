import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./Components/App";
import { Home } from "./Components/Home";
import { Shop } from "./Components/Shop";
import { Cart } from "./Components/Cart";
import { ItemPage } from "./Components/ItemPage";
import { ErrorPage } from "./Components/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop/:sort?/:search?/:pageIndex",
    element: <Shop />,
  },
  {
    path: "cart/:filter?/:search?/:pageIndex",
    element: <Cart />,
  },
  {
    path: "items/:page/:id",
    element: <ItemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
