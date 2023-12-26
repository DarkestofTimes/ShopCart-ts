import { Link } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-[#000000ee] ">
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
            <div className="itemsTotal">0</div>
            <div className="sumTotal">0$</div>
            <Link to="/cart/1">Cart</Link>
          </li>
        </ul>
      </nav>
      <ProgressBar />
    </header>
  );
};
