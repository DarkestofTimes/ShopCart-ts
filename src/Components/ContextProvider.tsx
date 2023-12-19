import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ContextProps {
  children: ReactNode;
}

export interface DataItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

interface DataProps {
  data: DataItem[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const defaultContextValue: DataProps = {
  data: [],
  setData: () => {},
};

const DataContext = createContext<DataProps>(defaultContextValue);

const DataContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [data, setData] = useState<DataItem[]>([]);
  console.log(data); //remove
  const contextItems = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextItems}>{children}</DataContext.Provider>
  );
};

const LoadingContext = createContext<DataProps>(defaultContextValue);

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
  shopItems: DataItem[];
  setShopItems: React.Dispatch<React.SetStateAction<DataItem[]>>;
}

const shopContextValue: ShopProps = {
  shopItems: [],
  setShopItems: () => {},
};

const ShopItemsContext = createContext<ShopProps>(shopContextValue);

const ShopItemsContextProvider: React.FC<ContextProps> = ({ children }) => {
  const { data } = useDataContext();
  const [shopItems, setShopItems] = useState<DataItem[]>([]);
  useEffect(() => {
    if (data.results) {
      const dataResults = data.results;
      const tempItems = [...dataResults];
      const sorted = tempItems.sort((a, b) => {
        return b.rating.count - a.rating.count;
      });
      setShopItems(sorted);
    }
  }, [data]);

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

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  return (
    <DataContextProvider>
      <LoadingContextProvider>
        <ShopItemsContextProvider>{children}</ShopItemsContextProvider>
      </LoadingContextProvider>
    </DataContextProvider>
  );
};

export const useDataContext = () => useContext(DataContext);
export const useShopItemsContext = () => useContext(ShopItemsContext);
export const useLoadingContext = () => useContext(LoadingContext);
