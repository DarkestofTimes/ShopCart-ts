import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";
import { DataLoader } from "./DataLoader";
import { ItemLoader } from "./ItemLoader";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:page/*?",
      element: <Shop />,
      loader: DataLoader,
    },
    /* path: "shop/:publisher?/:platform?/:metacrit?/:releaseDate?/:genres?/:tags?/:ordering?/:searchQ?/:pageIndex", */
    {
      path: "cart/:filter?/:search?/:pageIndex",
      element: <Cart />,
    },
    {
      path: "items/:page/:itemId",
      element: <ItemPage />,
      loader: ItemLoader,
    },
  ]);

  return <RouterProvider router={router} />;
};
