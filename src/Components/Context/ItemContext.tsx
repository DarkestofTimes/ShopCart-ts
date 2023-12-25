import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: object | undefined;
}

export interface ItemsContext {
  Items: Item;
  setItems: React.Dispatch<React.SetStateAction<Item>>;
}

const ItemsContextValue: ItemsContext = {
  Items: {},
  setItems: () => {},
};

export const ItemContext = createContext<ItemsContext>(ItemsContextValue);

export const ItemContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [Items, setItems] = useState<Item>({});

  const contextItems = {
    Items,
    setItems,
  };

  return (
    <ItemContext.Provider value={contextItems}>{children}</ItemContext.Provider>
  );
};
