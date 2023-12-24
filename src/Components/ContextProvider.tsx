import { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface DataItem {
  count: number;
  description: string;
  filters: object;
  price: number;
  results: Items[];
}

export interface Items {
  results: {
    id: number;
    background_image: string;
    genres: object[];
    rating: number;
    ratings_count: number;
    name: string;
  };
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

interface ShopProps {
  shopItems: Items[];
  setShopItems: React.Dispatch<React.SetStateAction<Items[]>>;
}

const shopContextValue: ShopProps = {
  shopItems: [],
  setShopItems: () => {},
};

const ShopItemsContext = createContext<ShopProps>(shopContextValue);

const ShopItemsContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [shopItems, setShopItems] = useState<Items[]>([]);

  const contextItems = {
    shopItems,
    setShopItems,
  };

  return (
    <ShopItemsContext.Provider value={contextItems}>
      {children}
    </ShopItemsContext.Provider>
  );
};

const ItemContext = createContext<ShopProps>(shopContextValue);

const ItemContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [Items, setItems] = useState<Items[]>([]);

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
      <ShopItemsContextProvider>
        <ItemContextProvider>{children}</ItemContextProvider>
      </ShopItemsContextProvider>
    </LoadingContextProvider>
  );
};

export const useShopItemsContext = () => useContext(ShopItemsContext);
export const useItemContext = () => useContext(ItemContext);
export const useLoadingContext = () => useContext(LoadingContext);
