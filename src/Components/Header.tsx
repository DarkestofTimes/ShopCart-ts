import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import { useCartContext } from "./Context/ContextProvider";
import { calcSum } from "../Functions/calcSum";

export const Header = () => {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    setCart({
      ...cart,
      sum: calcSum(cart.results),
    });
  }, [cart.count]);

  return (
    <header className="fixed h-8 top-0 w-full z-10 bg-[#0f0f0f] ">
      <nav>
        <ul className="grid grid-cols-4">
          <li>
            <img src="" alt="" />
          </li>
          <li className="ml-auto mr-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-auto">
            <Link to="/shop/1">Shop</Link>
          </li>
          <li className="grid grid-cols-3">
            <div className="itemsTotal">{cart.count}</div>
            <div className="sumTotal">{cart.sum}$</div>
            <Link to="/cart/1">Cart</Link>
          </li>
        </ul>
      </nav>
      <ProgressBar />
    </header>
  );
};
