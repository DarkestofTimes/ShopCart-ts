import { Params } from "react-router-dom";
import { CartContext } from "../Components/Context/CartContext";

interface Request {
  params: Params;
}

interface dataProps {
  CartContext: CartContext;
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
          sum: cart.sum,
        }
      : null;

    return { CartData };
  };
