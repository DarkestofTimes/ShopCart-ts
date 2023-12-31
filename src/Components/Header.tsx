import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import { useCartContext } from "./Context/ContextProvider";
import { calcSum } from "../Functions/calcSum";

export const Header = () => {
  return (
    <header className="fixed h-10 top-0 w-full z-10 bg-[#0f0f0f] ">
      <nav>
        <ul className="grid grid-cols-4 gap-2">
          <li className="w-full flex">
            <img src="" alt="" />
          </li>
          <li className="w-full flex">
            <Link
              to="/"
              className="w-full rounded transition-all duration-200 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 bg-purple-600">
              Home
            </Link>
          </li>
          <ShopBtn />
          <CartBtn />
        </ul>
      </nav>
      <ProgressBar />
    </header>
  );
};

const ShopBtn = () => {
  return (
    <li className="w-full flex">
      <Link
        to={`/shop/${1}`}
        className="w-full rounded transition-all duration-200 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 bg-purple-600">
        Shop
      </Link>
    </li>
  );
};

const CartBtn = () => {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    setCart({
      ...cart,
      sum: calcSum(cart.results),
    });
  }, [cart.count]);

  return (
    <li className="flex rounded mr-auto transition-all duration-200 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 bg-purple-600 group">
      <div className="p-1 pl-2 pr-2 text-center font-bold bg-[#f0f8ff] text-purple-600  rounded  ">
        {cart.count}
      </div>
      <Link to="/cart/1" className=" w-10 p-1 ">
        <svg
          fill="#f0f8ff"
          viewBox="0 0 16.00 16.00"
          xmlns="http://www.w3.org/2000/svg"
          data-darkreader-inline-fill=""
          className="group-hover:fill-purple-600 ">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M13.35 10.48H4.5l-.24-1.25h9.13a1.24 1.24 0 0 0 1.22-1l.84-4a1.25 1.25 0 0 0-1.22-1.51H3l-.22-1.24H.5v1.25h1.25l1.5 7.84a2 2 0 0 0-1.54 1.93 2.09 2.09 0 0 0 2.16 2 2.08 2.08 0 0 0 2.13-2 2 2 0 0 0-.16-.77h5.49a2 2 0 0 0-.16.77 2.09 2.09 0 0 0 2.16 2 2 2 0 1 0 0-4zM14.23 4l-.84 4H4l-.74-4zM3.87 13.27A.85.85 0 0 1 3 12.5a.85.85 0 0 1 .91-.77.84.84 0 0 1 .9.77.84.84 0 0 1-.94.77zm9.48 0a.85.85 0 0 1-.91-.77.92.92 0 0 1 1.81 0 .85.85 0 0 1-.9.77z"></path>
          </g>
        </svg>
      </Link>
      <div className="p-1 pl-2 pr-2 text-center font-bold bg-[#f0f8ff] text-purple-600  rounded ">
        {cart.sum}$
      </div>
    </li>
  );
};
