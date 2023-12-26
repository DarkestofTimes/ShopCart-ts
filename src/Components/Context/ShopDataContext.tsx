import { createContext, useRef, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: object | undefined;
}

export interface ShopContext {
  current: Item;
}

const shopContextValue: ShopContext = {
  current: {},
};

export const ShopDataContext = createContext<ShopContext>(shopContextValue);

export const ShopDataContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const shopData = useRef<Item>({});

  const contextItems: ShopContext = {
    current: shopData.current,
  };

  return (
    <ShopDataContext.Provider value={contextItems}>
      {children}
    </ShopDataContext.Provider>
  );
};
