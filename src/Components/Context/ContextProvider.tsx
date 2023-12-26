import { useContext, ReactNode } from "react";

import { ShopDataContext, ShopDataContextProvider } from "./ShopDataContext";
import { PricingContext, PricingContextProvider } from "./PricingContext";
import { ItemContext, ItemContextProvider } from "./ItemContext";
import {
  CategoriesContext,
  CategoriesContextProvider,
} from "./CategoriesContext";

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
  pricing: {
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: string;
  };
  platforms: {
    platform: {
      slug: string;
      id: number;
    };
  }[];
}

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  return (
    <ShopDataContextProvider>
      <PricingContextProvider>
        <ItemContextProvider>
          <CategoriesContextProvider>{children}</CategoriesContextProvider>
        </ItemContextProvider>
      </PricingContextProvider>
    </ShopDataContextProvider>
  );
};

export const useShopDataContext = () => useContext(ShopDataContext);
export const usePricingContext = () => useContext(PricingContext);
export const useItemContext = () => useContext(ItemContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
