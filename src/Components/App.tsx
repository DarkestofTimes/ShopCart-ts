import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage";
import { ErrorPage } from "./ErrorPage";
import { DataLoader } from "./DataLoader";
import { ItemLoader } from "./ItemLoader";
import { useShopItemsContext, useItemContext } from "./ContextProvider";

export const App = () => {
  const shopItemsContext = useShopItemsContext();
  const ItemContext = useItemContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop/:page/*?",
      element: <Shop />,
      loader: DataLoader(shopItemsContext),
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
  ]);

  return <RouterProvider router={router} />;
};
