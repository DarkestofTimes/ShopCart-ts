import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";
import { DataLoader } from "./DataLoader";
import { ItemLoader } from "./ItemLoader";
import { useShopItemsContext } from "./ContextProvider";

export const App = () => {
  const ItemsContext = useShopItemsContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:page/*?",
      element: <Shop />,
      loader: DataLoader(ItemsContext),
    },

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
