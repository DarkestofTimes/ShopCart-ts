import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="relative top-0 col-span-4 row-span-1">
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
    </header>
  );
};
