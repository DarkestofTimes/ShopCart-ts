import { Params } from "react-router-dom";

interface Request {
  params: Params;
}

interface dataProps {
  CartContext: {
    count: number;
    results: {
      id: number;
      name: string;
      background_image: string;
      pricing: {
        price: number;
        onSale: boolean;
        salePrice: number;
        salePercent: string;
      };
    }[];
  };
}

export const CartDataLoader =
  ({ CartContext }: dataProps) =>
  async ({ params }: Request) => {
    const { page } = params;
    const { cart } = CartContext;
    if (!page) {
      return;
    }

    const sliceIndex = Number(page) === 1 ? 0 : (Number(page) - 1) * 20;
    const CartData = cart
      ? {
          count: cart.count,
          results: cart.results.slice(sliceIndex, sliceIndex + 20),
        }
      : null;

    return { CartData };
  };
