import { createContext, useRef, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: {
    details: {
      id: number;
      background_image: string;
      name: string;
      released: string;
    };
    screens: {
      results: {
        id: number;
        image: string;
        data?: {
          max: string;
        };
      }[];
    };
    additions: {
      results: {
        id: number;
        background_image: string;
        name: string;
      }[];
    };
    trailers: {
      results: {
        id: number;
        image?: string;
        data: {
          max: string;
        };
      }[];
    };
    series: {
      results: {
        id: number;
        background_image: string;
        name: string;
      }[];
    };
  };
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
