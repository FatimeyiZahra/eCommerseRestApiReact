import React, { useContext } from "react";
import Seo from "../../app/seo/Seo";
import "./style.css";
import { ContextCart } from "../../app/cart/CartContext";
const CartPage = () => {
  const { basket } = useContext(ContextCart);
  const { RemoveFromCart } = useContext(ContextCart);
  const { changeQty } = useContext(ContextCart);
  const {Up} = useContext(ContextCart);
  const {Down} = useContext(ContextCart);
  const {total} = useContext(ContextCart);

  if(basket.length === 0)
  return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>
  return (
    <>
      <Seo title="cart" />
      <section id="shop-cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="title">
                <h3>shopping cart</h3>
              </div>
              <div className="table-cart">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket &&
                      basket.map((bst) => (
                        <tr key={bst.product.id}>
                          <td>
                            <div className="img-product">
                              <img src={bst.product.photos[0]} alt="" />
                            </div>
                            <div className="name-product">
                              {bst.product.name}
                            </div>
                            <div className="price">
                              {bst.product.discount != null ? (
                                <>
                                  <span>
                                    {" "}
                                    $
                                    {bst.product.price -
                                      (bst.product.price *
                                        bst.product.discount.percentage) /
                                        100}
                                  </span>
                                  <span className="regular">
                                    ${bst.product.price}
                                  </span>
                                </>
                              ) : (
                                <span>${bst.product.price}</span>
                              )}
                            </div>
                            <div className="clearfix"></div>
                          </td>
                          <td>
                            <div className="quanlity">
                              <span 
                              onClick={() =>
                                Down(bst)
                              }
                              className="btn-down"></span>
                              <input
                                type="number"
                                value={bst.quantity}
                                onChange={(e) =>
                                  changeQty(bst, e.target.value)
                                }
                              />
                              <span
                               className="btn-up"
                               onClick={() =>
                                Up(bst)
                              }
                               ></span>
                            </div>
                          </td>
                          <td>
                            <div className="total">
                              {/* ${bst.quantity * bst.product.price} */}
                              {bst.product.discount != null ? (
                                <>
                                  <>
                                    {" "}
                                    $
                                    {bst.quantity *
                                      (bst.product.price -
                                        (bst.product.price *
                                          bst.product.discount.percentage) /
                                          100)}
                                  </>
                                </>
                              ) : (
                                <>${bst.quantity * bst.product.price}</>
                              )}
                            </div>
                          </td>
                          <td>
                            <i
                              onClick={() => RemoveFromCart(bst.product)}
                              className="far fa-trash-alt"
                            ></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart-totals">
                <h3>Cart Totals</h3>
                <form action="!#" method="get" acceptCharset="utf-8">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td className="subtotal">$2,589.00</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td className="btn-radio">
                          <div className="radio-info">
                            <input
                              type="radio"
                              id="flat-rate"
                              name="radio-flat-rate"
                            />
                            <label htmlFor="flat-rate">
                              Flat Rate: <span>$3.00</span>
                            </label>
                          </div>
                          <div className="radio-info">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="radio-flat-rate"
                            />
                            <label htmlFor="free-shipping">Free Shipping</label>
                          </div>
                          <div className="btn-shipping">
                            <a href="!#" title="">
                              Calculate Shipping
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        
                        <td className="price-total">${total}</td>
                        
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-cart-totals">
                    <a href="!#" className="update" title="">
                      Check Out
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;




