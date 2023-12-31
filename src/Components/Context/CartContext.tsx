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

export interface Cart {
  count: number;
  results: Item[];
  sum: number;
}

export interface CartContext {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

const cartContextValue: CartContext = {
  cart: {
    count: 0,
    results: [
      {
        id: 0,
        name: "",
        background_image: "",
        pricing: {
          price: 0,
          onSale: false,
          salePrice: 0,
          salePercent: "",
        },
      },
    ],
    sum: 0,
  },
  setCart: () => {},
};

export const CartContext = createContext<CartContext>(cartContextValue);

export const CartContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    count: 0,
    results: [
      {
        id: 0,
        name: "",
        background_image: "",
        pricing: {
          price: 0,
          onSale: false,
          salePrice: 0,
          salePercent: "",
        },
      },
    ],
    sum: 0,
  });

  const contextItems: CartContext = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={contextItems}>{children}</CartContext.Provider>
  );
};
