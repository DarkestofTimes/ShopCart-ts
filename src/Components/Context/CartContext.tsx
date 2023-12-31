import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

export interface Item {
  id: number;
  name: string;
  background_image: string;
  pricing: {
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: string;
  };
}

export interface CartContext {
  count: number;
  results: Item[];
}

const cartContextValue: CartContext = {
  count: 0,
  results: [],
};

export const CartContext = createContext<CartContext>(cartContextValue);

export const CartContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [cart, setCart] = useState<CartContext>({
    count: 0,
    results: [],
  });

  const contextItems: CartContext = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={contextItems}>{children}</CartContext.Provider>
  );
};
