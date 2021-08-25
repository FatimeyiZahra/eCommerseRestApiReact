import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../../cart/CartContext";
import BasketEmpty from "./BasketEmpty";
import BasketFull from "./BasketFull";

const Basket = () => {
  const { basket } = useContext(ContextCart);
  const { total } = useContext(ContextCart);
  return (
    <div className="col-md-3 col-lg-3 ">
      <div className="shop-box">
        <div className="inner-box">
          <a href="!#" title="">
            <div className="icon-cart">
              <img
                src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/add-cart.png"
                alt=""
              />
              <span>{basket.length}</span>
            </div>
            <div className="price">${total}</div>
          </a>
          <div className="dropdown-box">
            {basket.length > 0 ? <BasketFull /> : <BasketEmpty />}
            <div className="total">
              <span>Subtotal:</span>
              <span className="price">${total}</span>
            </div>
            <div className="btn-cart">
              <Link to="/cart" className="view-cart">
                View Cart
              </Link>
              <Link to="/checkout" className="check-out">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
