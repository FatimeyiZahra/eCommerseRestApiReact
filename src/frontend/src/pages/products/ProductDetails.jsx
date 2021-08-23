import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./productDetail.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ContextCart } from "../../app/cart/CartContext";

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://localhost:44368/v1/homepage/all-products/${id}`)
      .then((res) => setProductDetails(res.data));
  });
  // console.log(productDetails)
  const { Up } = useContext(ContextCart);
  const { basket } = useContext(ContextCart);
  const { addToCart } = useContext(ContextCart);
  return (
    <section id="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-md-6">
            <div className="product-detail">
              <div className="header-detail">
                <h4 className="name">{productDetails.name}</h4>
                <div className="category">
                  {/* {productDetails.category.name} */}
                </div>
                <div className="reviewed">
                  <div className="review">
                    <div className="queue">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <span>3 Reviews</span>
                      <span className="add-review">Add Your Review</span>
                    </div>
                  </div>
                  <div className="status-product">
                    Availablity <span>In stock</span>{" "}
                    <span>{productDetails.quantity}</span>
                  </div>
                </div>
              </div>
              <div className="content-detail">
                <div className="price">
                  {productDetails.discount != null ? (
                    <>
                      <span className="sale">
                        {" "}
                        $
                        {productDetails.price -
                          (productDetails.price *
                            productDetails.discount.percentage) /
                            100}
                      </span>
                      <span className="regular">${productDetails.price}</span>
                    </>
                  ) : (
                    <span className="sale">${productDetails.price}</span>
                  )}
                </div>
                <div className="info-text">{productDetails.desc}</div>
                <div className="product-id">
                  SKU: <span className="id">FW511948218</span>
                </div>
              </div>
              <div className="footer-detail">
                <div className="quanlity-box">
                  <div className="quanlity">
                    <span className="btn-down"></span>
                    <input name="number" placeholder="Quantity" />
                    <span
                      onClick={() => Up(basket.quantity)}
                      className="btn-up"
                    ></span>
                  </div>
                  <div className="total">
                    <span>TOTAL:</span>
                    <p>$120</p>
                  </div>
                </div>

                <div className="box-cart style2">
                  <div className="btn-add-cart">
                    <span
                      onClick={() =>
                        addToCart(
                          productDetails.name,
                          productDetails.id,
                          productDetails.photos,

                        )
                      }
                    >
                      <img
                        src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/add-cart.png"
                        alt=""
                      />
                      Add to Cart
                    </span>
                  </div>
                  <div className="btn-add-wishlist">
                    <a href="!#" title="">
                      <img
                        src="http://127.0.0.1:5501/creativelayers.net/themes/techno-html/images/icons/wishlist.png"
                        alt=""
                      />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="social-single">
                  <span>SHARE</span>
                  <ul className="social-list style2">
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="!#" title="">
                        <i className="fa fa-google" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

// {basket.map((bst) => (
//   <>
//     <span className="btn-down"></span>
//     <input name="number" value={bst.quantity} />
//     <span
//       onClick={() => Up(basket.quantity)}
//       className="btn-up"
//     ></span>
//     <div className="total">
//       <span>TOTAL:</span>
//       {bst.product.discount != null ? (
//         <>
//           <span>
//             {" "}
//             $
//             {bst.quantity*(bst.product.price -
//               (bst.product.price *
//                 bst.product.discount.percentage) /
//                 100)}
//           </span>
//           <span className="regular">
//             ${bst.quantity*(bst.product.price)}
//           </span>
//         </>
//       ) : (
//         <p>${bst.quantity*(bst.product.price)}</p>
//       )}

//     </div>
//   </>
// ))}
