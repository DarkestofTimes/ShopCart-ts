import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: object | undefined;
}

export interface ShopProps {
  shopData: Item;
  setShopData: React.Dispatch<React.SetStateAction<Item>>;
}

const shopContextValue: ShopProps = {
  shopData: {},
  setShopData: () => {},
};

export const ShopDataContext = createContext<ShopProps>(shopContextValue);

export const ShopDataContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
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
