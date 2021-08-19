import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import alertify from "alertifyjs";

export const ContextCart = createContext();

const CartContext = (props) => {
  const [basket, setBasket] = useState([]);
  
  const AddToCart = (prd) => {
    const newBasket = [...basket];

    var addedProduct = newBasket.find((c) => c.product.id === prd.id);
    if (addedProduct) {
      Number((addedProduct.quantity += 1));
      console.log(addedProduct.quantity);
    } else {
      newBasket.push({ product: prd, quantity: 1 });
    }
    setBasket(basket);
    alertify.success(prd.name + " added to cart!");
  };
  const RemoveFromCart = (bst) => {
    let newBasket = basket.filter((c) => c.product.id !== bst.id);
    setBasket(newBasket);
    alertify.error(bst.name + " removed from cart!");
  };

  return (
    <div>
      <ContextCart.Provider value={{AddToCart,RemoveFromCart}}>
        {props.children}
      </ContextCart.Provider>
    </div>
  );
};

export default CartContext;



// <div className="blog-pagination">
// <span>Showing 1–15 of 20 results</span>
// <ul className="flat-pagination style1">
//   <li className="prev">
//     <a href="!#" title="">
//       <i className="fas fa-long-arrow-alt-left"></i>Prev Page
//     </a>
//   </li>
//   <li>
//     <a href="!#" className="waves-effect" title="">
//       01
//     </a>
//   </li>
//   <li>
//     <a href="!#" className="waves-effect" title="">
//       02
//     </a>
//   </li>
//   <li className="active">
//     <a href="!#" className="waves-effect" title="">
//       03
//     </a>
//   </li>
//   <li>
//     <a href="!#" className="waves-effect" title="">
//       04
//     </a>
//   </li>
//   <li className="next">
//     <a href="!#" title="">
//       Next Page<i className="fas fa-long-arrow-alt-right"></i>
//     </a>
//   </li>
// </ul>
// <div className="clearfix"></div>
// </div>
