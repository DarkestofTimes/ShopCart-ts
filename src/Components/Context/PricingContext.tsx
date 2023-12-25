import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  children: ReactNode;
}

const PricingContextValue: PricingContext = {
  pricing: {
    id: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    salePercent: "",
  },
  setPricing: () => {},
};

interface pricing {
  id: number;
  price: number;
  onSale: boolean;
  salePrice: number;
  salePercent: string;
}

export interface PricingContext {
  pricing: pricing;
  setPricing: React.Dispatch<React.SetStateAction<pricing>>;
}

export const PricingContext =
  createContext<PricingContext>(PricingContextValue);

export const PricingContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [pricing, setPricing] = useState<pricing>({
    id: 0,
    price: 0,
    onSale: false,
    salePrice: 0,
    salePercent: "",
  });

  const contextItems = {
    pricing,
    setPricing,
  };

  return (
    <PricingContext.Provider value={contextItems}>
      {children}
    </PricingContext.Provider>
  );
};
