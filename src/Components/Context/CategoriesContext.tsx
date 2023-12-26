import { createContext, useRef, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  [key: string]: object | undefined;
}

export interface categoriesContext {
  current: Item;
}

const CategoriesContextValue: categoriesContext = {
  current: {},
};

export const CategoriesContext = createContext<categoriesContext>(
  CategoriesContextValue
);

export const CategoriesContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const categories = useRef<Item>({});

  const contextItems: categoriesContext = {
    current: categories.current,
  };

  return (
    <CategoriesContext.Provider value={contextItems}>
      {children}
    </CategoriesContext.Provider>
  );
};
