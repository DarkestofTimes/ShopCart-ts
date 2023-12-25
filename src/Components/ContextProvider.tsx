import { createContext, useContext, useState, ReactNode } from "react";

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

export interface Item {
  [key: string]: object | undefined;
}

export interface ItemsContext {
  Items: Item;
  setItems: React.Dispatch<React.SetStateAction<Item>>;
}

interface LoadingProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: LoadingProps = {
  loading: true,
  setLoading: () => {},
};
const LoadingContext = createContext<LoadingProps>(defaultContextValue);

const LoadingContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const contextItems = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={contextItems}>
      {children}
    </LoadingContext.Provider>
  );
};

export interface ShopProps {
  shopData: Item;
  setShopData: React.Dispatch<React.SetStateAction<Item>>;
}

const shopContextValue: ShopProps = {
  shopData: {},
  setShopData: () => {},
};

const ShopDataContext = createContext<ShopProps>(shopContextValue);

const ShopDataContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [shopData, setShopData] = useState<Item>({});

  const contextItems = {
    shopData,
    setShopData,
  };

  return (
    <ShopDataContext.Provider value={contextItems}>
      {children}
    </ShopDataContext.Provider>
  );
};

interface pricing {
  id: number;
  price: number;
  onSale: boolean;
  salePrice: number;
  salePercent: string;
}

export interface PricingContext {
  pricing: pricing;
  setPricing: React.Dispatch<React.SetStateAction<pricing>>;
}

const PricingContextValue: PricingContext = {
  pricing: {
    id: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    salePercent: "",
  },
  setPricing: () => {},
};

const PricingContext = createContext<PricingContext>(PricingContextValue);

const PricingContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [pricing, setPricing] = useState<pricing>({
    id: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    salePercent: "",
  });

  const contextItems = {
    pricing,
    setPricing,
  };

  return (
    <PricingContext.Provider value={contextItems}>
      {children}
    </PricingContext.Provider>
  );
};

const ItemsContextValue: ItemsContext = {
  Items: {},
  setItems: () => {},
};

const ItemContext = createContext<ItemsContext>(ItemsContextValue);

const ItemContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [Items, setItems] = useState<Item>({});

  const contextItems = {
    Items,
    setItems,
  };

  return (
    <ItemContext.Provider value={contextItems}>{children}</ItemContext.Provider>
  );
};

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  return (
    <LoadingContextProvider>
      <ShopDataContextProvider>
        <PricingContextProvider>
          <ItemContextProvider>{children}</ItemContextProvider>
        </PricingContextProvider>
      </ShopDataContextProvider>
    </LoadingContextProvider>
  );
};

export const useShopDataContext = () => useContext(ShopDataContext);
export const usePricingContext = () => useContext(PricingContext);
export const useItemContext = () => useContext(ItemContext);
export const useLoadingContext = () => useContext(LoadingContext);
