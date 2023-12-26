import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";
import { DataLoader } from "../Functions/Loaders/DataLoader";
import { ItemLoader } from "../Functions/Loaders/ItemLoader";
import { useShopDataContext, useItemContext } from "./Context/ContextProvider";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

export const App = () => {
  const shopData = useShopDataContext();
  const Items = useItemContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "shop/:page/*?",
          element: <Shop />,
          loader: DataLoader({ shopData }),
        },

        {
          path: "cart/:filter?/:search?/:pageIndex",
          element: <Cart />,
        },
        {
          path: "items/:page/:itemId",
          element: <ItemPage />,
          loader: ItemLoader({ Items }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
