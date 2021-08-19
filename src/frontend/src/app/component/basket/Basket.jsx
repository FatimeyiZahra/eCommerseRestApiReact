import React from 'react'

const Basket = () => {
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
                        <span>4</span>
                      </div>
                      <div className="price">$0.00</div>
                    </a>
                    <div className="dropdown-box">
                      <ul>
                        <li>
                          <div className="img-product">
                            <img
                              src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/product/other/img-cart-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="info-product">
                            <div className="name">
                              Samsung - Galaxy S6 4G LTE <br />
                              with 32GB Memory Cell Phone
                            </div>
                            <div className="price">
                              <span>1 x</span>
                              <span>$250.00</span>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                          <span className="delete">x</span>
                        </li>
                        <li>
                          <div className="img-product">
                            <img
                              src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/product/other/img-cart-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="info-product">
                            <div className="name">
                              Sennheiser - Over-the-Ear Headphone System - Black
                            </div>
                            <div className="price">
                              <span>1 x</span>
                              <span>$250.00</span>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                          <span className="delete">x</span>
                        </li>
                      </ul>
                      <div className="total">
                        <span>Subtotal:</span>
                        <span className="price">$1,999.00</span>
                      </div>
                      <div className="btn-cart">
                        <a href="shop-cart.html" className="view-cart" title="">
                          View Cart
                        </a>
                        <a href="shop-checkout.html" className="check-out" title="">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
    )
}

export default Basket
