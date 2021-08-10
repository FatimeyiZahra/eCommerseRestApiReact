import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { getCartItems } from "../../../modules/cart";
// import { BrowserRouter} from 'react-router-dom';
const Header = () => {
  return (
    <div className="__dml header">
      {/* <BrowserRouter> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Store</Link>
          </li>

          <li>
            <Link to="/cart">Cart:</Link> ({getCartItems().length})
          </li>

          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/coming-soon">cooming soon</Link>
          </li>
        </ul>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Header;
