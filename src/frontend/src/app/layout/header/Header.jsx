import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { BrowserRouter} from 'react-router-dom';
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
            <Link to="/cart">Cart:</Link> 
          </li>

          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Header;
