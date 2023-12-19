import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";
import { dataLoader } from "./DataLoader";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:publisher?:platform?:metacrit?:releaseDate?:genres?:tags?:ordering?/:searchQ?/:pageIndex",
      element: <Shop />,
      loader: dataLoader,
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
