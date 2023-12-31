import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ItemPage } from "./ItemPage/ItemPage";
import { ErrorPage } from "./ErrorPage";
import { DataLoader } from "../Loaders/DataLoader";
import { ItemLoader } from "../Loaders/ItemLoader";
import { SidebarLoader } from "../Loaders/SidebarLoader";
import { CartDataLoader } from "../Loaders/CartDataLoader";
import {
  useShopDataContext,
  useItemContext,
  useCategoriesContext,
  useCartContext,
} from "./Context/ContextProvider";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

export const App = () => {
  const shopData = useShopDataContext();
  const Items = useItemContext();
  const categories = useCategoriesContext();
  const CartContext = useCartContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      loader: SidebarLoader({ categories }),
      id: "root",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop/:page/*?",
          element: <Shop />,
          loader: DataLoader({ shopData }),
        },

        {
          path: "cart/:page/*?",
          element: <Cart />,
          loader: CartDataLoader({ CartContext }),
        },
        {
          path: "items/:routeValue/:itemId",
          element: <ItemPage />,
          loader: ItemLoader({ Items }),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
