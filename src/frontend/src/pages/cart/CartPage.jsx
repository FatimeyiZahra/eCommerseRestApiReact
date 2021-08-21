import React from "react";
import Seo from "../../app/seo/Seo";
import "./style.css";
const CartPage = () => {
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
              <div class="table-cart">
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
                    <tr>
                      <td>
                        <div class="img-product">
                          <img src="images/product/other/12.jpg" alt="" />
                        </div>
                        <div class="name-product">
                          Apple iPad Mini <br />
                          G2356
                        </div>
                        <div class="price">$1,250.00</div>
                        <div class="clearfix"></div>
                      </td>
                      <td>
                        <div class="quanlity">
                          <span class="btn-down"></span>
                          <input
                            name="number"
                            value="5"
                            min="1"
                            max="100"
                            placeholder="Quanlity"
                          />
                          <span class="btn-up"></span>
                        </div>
                      </td>
                      <td>
                        <div class="total">$6,250.00</div>
                      </td>
                      <td>
                        <a href="!#" title="">
                          <img src="images/icons/delete.png" alt="" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="img-product">
                          <img src="images/product/other/11.jpg" alt="" />
                        </div>
                        <div class="name-product">
                          Beats Pill+ Portable
                          <br />
                          Speaker
                        </div>
                        <div class="price">$1,250.00</div>
                        <div class="clearfix"></div>
                      </td>
                      <td>
                        <div class="quanlity">
                          <span class="btn-down"></span>
                          <input
                            type="number"
                            name="number"
                            value="5"
                            min="1"
                            max="100"
                            placeholder="Quanlity"
                          />
                          <span class="btn-up"></span>
                        </div>
                      </td>
                      <td>
                        <div class="total">$6,250.00</div>
                      </td>
                      <td>
                        <span>
                          <img src="images/icons/delete.png" alt="" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="cart-totals">
                <h3>Cart Totals</h3>
                <form action="!#" method="get" accept-charset="utf-8">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td class="subtotal">$2,589.00</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td class="btn-radio">
                          <div class="radio-info">
                            <input
                              type="radio"
                              id="flat-rate"
                              checked
                              name="radio-flat-rate"
                            />
                            <label for="flat-rate">
                              Flat Rate: <span>$3.00</span>
                            </label>
                          </div>
                          <div class="radio-info">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="radio-flat-rate"
                            />
                            <label for="free-shipping">Free Shipping</label>
                          </div>
                          <div class="btn-shipping">
                            <a href="!#" title="">
                              Calculate Shipping
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td class="price-total">$1,591.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btn-cart-totals">
                    <a href="!#" class="update" title="">
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
