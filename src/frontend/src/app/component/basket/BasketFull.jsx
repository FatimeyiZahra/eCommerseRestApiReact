import React, { useContext } from "react";
import { ContextCart } from "../../cart/CartContext";

const BasketFull = () => {
  const { basket } = useContext(ContextCart);
  const { RemoveFromCart } = useContext(ContextCart);
  return (
    <ul>
      {basket &&
        basket.map((bst) => (
          <li key={bst.id}>
            <div className="img-product">
              <img src={bst.product.photos[0]} alt="" />
            </div>
            <div className="info-product">
              <div className="name">{bst.product.name}</div>
              <div className="price">
                <span>{bst.quantity} x </span>
                {bst.product.discount != null ? (
                  <>
                    <>
                      {" "}
                      $
                      {bst.product.price -
                        (bst.product.price * bst.product.discount.percentage) /
                          100}
                      <span className="regular">${bst.product.price}</span>
                    </>
                  </>
                ) : (
                  <>${bst.product.price}</>
                )}
                {/* <span>${bst.product.price}</span> */}
              </div>
            </div>
            <div className="clearfix"></div>
            <span
              onClick={() => RemoveFromCart(bst.product)}
              className="delete"
            >
              x
            </span>
          </li>
        ))}
    </ul>
  );
};

export default BasketFull;
