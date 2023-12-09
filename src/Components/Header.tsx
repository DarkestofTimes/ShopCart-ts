import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <div className="itemsTotal">0</div>
            <div className="sumTotal">0$</div>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
