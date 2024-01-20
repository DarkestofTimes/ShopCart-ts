import { useContext, ReactNode } from "react";
import { ShopDataContext, ShopDataContextProvider } from "./ShopDataContext";
import { ItemContext, ItemContextProvider } from "./ItemContext";
import {
  CategoriesContext,
  CategoriesContextProvider,
} from "./CategoriesContext";
import { CartContext, CartContextProvider } from "./CartContext";

interface ContextProps {
  children: ReactNode;
}

export interface DataItem {
  count: number;
  description: string;
  filters: object;
  price: number;
  results: ShopItem[];
}

export interface ShopItem {
  id: number;
  background_image: string;
  genres: object[];
  rating: number;
  ratings_count: number;
  name: string;
  metacritic: number;
  released: string;
  isInCart?: boolean;
  pricing: {
    price: number;
    onSale: boolean;
    salePrice: number | null;
    salePercent: string | null;
  };
  platforms: {
    platform: {
      slug: string;
      id: number;
      name: string;
    };
  }[];
}

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  return (
    <ShopDataContextProvider>
      <CartContextProvider>
        <ItemContextProvider>
          <CategoriesContextProvider>{children}</CategoriesContextProvider>
        </ItemContextProvider>
      </CartContextProvider>
    </ShopDataContextProvider>
  );
};

export const useShopDataContext = () => useContext(ShopDataContext);
export const useItemContext = () => useContext(ItemContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
export const useCartContext = () => useContext(CartContext);
