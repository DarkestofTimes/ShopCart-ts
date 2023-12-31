import { createContext, useRef, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: object | undefined;
}

export interface ItemsContext {
  current: Item;
}

const ItemsContextValue: ItemsContext = {
  current: {},
};

export const ItemContext = createContext<ItemsContext>(ItemsContextValue);

export const ItemContextProvider: React.FC<ContextProps> = ({ children }) => {
  const Items = useRef<Item>({});

  const contextItems = {
    current: Items.current,
  };

  return (
    <ItemContext.Provider value={contextItems}>{children}</ItemContext.Provider>
  );
};
