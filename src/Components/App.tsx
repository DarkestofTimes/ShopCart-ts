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
import { DataLoader } from "../Functions/DataLoader";
import { ItemLoader } from "../Functions/ItemLoader";
import { useShopDataContext, useItemContext } from "./ContextProvider";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

export const App = () => {
  const shopDataContext = useShopDataContext();
  const ItemContext = useItemContext();
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
          loader: DataLoader(shopDataContext),
        },

        {
          path: "cart/:filter?/:search?/:pageIndex",
          element: <Cart />,
        },
        {
          path: "items/:page/:itemId",
          element: <ItemPage />,
          loader: ItemLoader(ItemContext),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
