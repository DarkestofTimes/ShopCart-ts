/* import { InitialFetch } from "./FetchData"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";

export const App = () => {
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

  return <RouterProvider router={router} />;
};
