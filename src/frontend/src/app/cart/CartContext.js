import React, { createContext, useState } from "react";
import alertify from "alertifyjs";

export const ContextCart = createContext();

const CartContext = (props) => {
  const [basket, setBasket] = useState([]);
  // const total = 0;

  const addToCart = (prd) => {
    const newBasket = [...basket];

    var addedProduct = newBasket.find((c) => c.product.id === prd.id);
    if (addedProduct) {
      Number((addedProduct.quantity += 1));
      // console.log(addedProduct.quantity);
    } else {
      newBasket.push({ product: prd, quantity: 1 });
    }
    setBasket(newBasket);
    // console.log(newBasket);
    alertify.success(prd.name + " added to cart!");
  };
  const Up = (prd) => {
     setBasket((prev) => [
      ...prev.map((item) =>
        item.id === prd.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    ]);
  };
  const Down = (prd) => {
    // if (prd.quantity === 0) return RemoveFromCart(prd);
    setBasket((prev) => [
     ...prev.map((item) =>
       item.id === prd.id ? { ...item, quantity: item.quantity - 1 } : item,
     ),
   ]);
 };
  const RemoveFromCart = (bst) => {
    let newBasket = basket.filter((c) => c.product.id !== bst.id);
    setBasket(newBasket);
    alertify.error(bst.name + " removed from cart!");
  };
  function changeQty(bst, qty) {
    if (qty === 0) return RemoveFromCart(bst);
    const newBasket = [...basket];

    var addedProduct = newBasket.find((c) => c.product.id === bst.id);
    if (addedProduct) {
      newBasket.push({  product: bst, qty });
    }
    setBasket(newBasket);
    // setBasket((prev) => [
    //   ...prev.map((item) =>
    //     item.id === bst.id ? { ...item, qty } : item,
    //   ),
    // ]);
  }

let total = 0;
 const TotalPrice=(prd)=>{
   basket.map(bst=>(
     total+=(bst.price*bst.quantity)
   ))
   setBasket(total)
  // setBasket((prev) => [
  //   ...prev.map((item) =>
  //     total+= (item.price*item.quantity)
     
  //   ), console.log(total)
  // ]);
 };

  return (
    <div>
      <ContextCart.Provider
        value={{ addToCart, basket, RemoveFromCart,changeQty,Up,Down}}
      >
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
