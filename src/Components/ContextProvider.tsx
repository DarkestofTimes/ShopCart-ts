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

  const contextItems = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextItems}>{children}</DataContext.Provider>
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
    const tempItems = [...data];
    const sorted = tempItems.sort((a, b) => {
      return b.rating.count - a.rating.count;
    });
    setShopItems(sorted);
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
      <ShopItemsContextProvider>{children}</ShopItemsContextProvider>
    </DataContextProvider>
  );
};

export const useDataContext = () => useContext(DataContext);
export const useShopItemsContext = () => useContext(ShopItemsContext);
