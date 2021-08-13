import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { getCartItems } from "../../../modules/cart";
// import { BrowserRouter} from 'react-router-dom';
const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ul className="flat-support">
                  <li>
                    <a href="faq.html" title="">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="store-location.html" title="">
                      Store Locator
                    </a>
                  </li>
                  <li>
                    <a href="order-tracking.html" title="">
                      Track Your Order
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <ul className="flat-unstyled">
                  <li className="account">
                    <a href="!!#" title="">
                      My Account
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="unstyled">
                      <li>
                        <a href="!!#" title="">
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html" title="">
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="shop-cart.html" title="">
                          My Cart
                        </a>
                      </li>
                      <li>
                        <a href="my-account.html" title="">
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="shop-checkout.html" title="">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="!!#" title="">
                      USD<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="unstyled">
                      <li>
                        <a href="!!#" title="">
                          Euro
                        </a>
                      </li>
                      <li>
                        <a href="!!#" title="">
                          Dolar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="!!#" title="">
                      English
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul className="unstyled">
                      <li>
                        <a href="!!#" title="">
                          Turkish
                        </a>
                      </li>
                      <li>
                        <a href="!!#" title="">
                          English
                        </a>
                      </li>
                      <li>
                        <a href="!!#" title="">
                          اللغة العربية
                        </a>
                      </li>
                      <li>
                        <a href="!!#" title="">
                          Español
                        </a>
                      </li>
                      <li>
                        <a href="!!#" title="">
                          Italiano
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-3 logo">
                  <a href="index.html" title="">
                    <img
                      src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/logos/logo.png"
                      alt=""
                    />
                  </a>
                </div>

                {/* <div className="col-md-6"> */}
                <div className="top-search">
                  <form action="#" method="get" className="form-search">
                    <div className="box-search">
                      <input
                        type="text"
                        name="search"
                        autoComplete="off"
                        placeholder="Search what you looking for ?"
                      />
                      <span className="btn-search">
                        <button type="submit" className="waves-effect">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/search.png"
                            alt=""
                          />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                {/* </div> */}
                <div className="col-3 flat-infomation">
                  <ul>
                    <li className="phone">
                      <img
                        src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/call-3.png"
                        alt=""
                      />
                      Call Us:{" "}
                      <a href="!!#" title="">
                        (888) 1234 56789
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <div className="mega-menu">
                  <div className="btn-mega">
                    <span></span>
                    ALL CATEGORIES
                  </div>
                  <ul className="menu">
                    <li>
                      <a href="!!#" title="" className="dropdown">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/01.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">Laptops &amp; Mac</span>
                      </a>
                      <div className="drop-menu">
                        <div className="one-third">
                          <div className="cat-title">Laptop And Computer</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Laptops, Desktops &amp; Monitors
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Hard Drives &amp; Memory Cards
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Printers &amp; Ink
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Computer Accessories
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Software
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                        <div className="one-third">
                          <div className="cat-title">Audio &amp; Video</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Headphones &amp; Speakers
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Home Entertainment Systems
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                MP3 &amp; Media Players
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="!#" title="" className="dropdown">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/02.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">Mobile &amp; Tablet</span>
                      </a>
                      <div className="drop-menu">
                        <div className="one-third">
                          <div className="cat-title">Laptop And Computer</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Laptops, Desktops &amp; Monitors
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Hard Drives &amp; Memory Cards
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Printers &amp; Ink
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Computer Accessories
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Software
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                        <div className="one-third">
                          <div className="cat-title">Audio &amp; Video</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Headphones &amp; Speakers
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Home Entertainment Systems
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                MP3 &amp; Media Players
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="!#" title="" className="dropdown">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/03.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">Home Devices</span>
                      </a>
                      <div className="drop-menu">
                        <div className="one-third">
                          <div className="cat-title">Laptop And Computer</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Laptops, Desktops &amp; Monitors
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Hard Drives &amp; Memory Cards
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Printers &amp; Ink
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Computer Accessories
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Software
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                        <div className="one-third">
                          <div className="cat-title">Audio &amp; Video</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Headphones &amp; Speakers
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Home Entertainment Systems
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                MP3 &amp; Media Players
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/05.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">TV &amp; Audio</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="" className="dropdown">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/07.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">Games &amp; Toys</span>
                      </a>
                      <div className="drop-menu">
                        <div className="one-third">
                          <div className="cat-title">Laptop And Computer</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Laptops, Desktops &amp; Monitors
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Hard Drives &amp; Memory Cards
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Printers &amp; Ink
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Networking &amp; Internet Devices
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Computer Accessories
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Software
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                        <div className="one-third">
                          <div className="cat-title">Audio &amp; Video</div>
                          <ul>
                            <li>
                              <a href="!#" title="">
                                Headphones &amp; Speakers
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                Home Entertainment Systems
                              </a>
                            </li>
                            <li>
                              <a href="!#" title="">
                                MP3 &amp; Media Players
                              </a>
                            </li>
                          </ul>
                          <div className="show">
                            <a href="!#" title="">
                              Shop All
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <span className="menu-img">
                          <img
                            src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/menu/08.png"
                            alt=""
                          />
                        </span>
                        <span className="menu-title">Video Cameras</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mainnav">
                <ul className="menu">
                  <li className="column-1">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="column-1">
                    <Link to="/products">Store</Link>
                  </li>

                  <li className="column-1">
                    <Link to="/cart">Cart:({getCartItems().length})</Link>
                  </li>

                  <li className="column-1">
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li className="column-1">
                    <Link to="/coming-soon">cooming soon</Link>
                  </li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
