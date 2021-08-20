import React, { useEffect, useState } from "react";
import axios from "axios"; 
import "./productDetail.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  const {id}= useParams();
  useEffect(() => {
    axios
      .get(`https://localhost:44368/v1/homepage/all-products/${id}`)
      .then((res) => setProductDetails(res.data));
  });
 console.log(productDetails)
  return (
    <section id="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"></div>
          <div class="col-md-6">
						<div class="product-detail">
							<div class="header-detail">
								<h4 class="name">{productDetails.name}</h4>
								<div class="category">
								{/* {productDetails.category.name} */}
								</div>
								<div class="reviewed">
									<div class="review">
										<div class="queue">
											<i class="fa fa-star" aria-hidden="true"></i>
											<i class="fa fa-star" aria-hidden="true"></i>
											<i class="fa fa-star" aria-hidden="true"></i>
											<i class="fa fa-star" aria-hidden="true"></i>
											<i class="fa fa-star" aria-hidden="true"></i>
										</div>
										<div class="text">
											<span>3 Reviews</span>
											<span class="add-review">Add Your Review</span>
										</div>
									</div>
									<div class="status-product">
										Availablity <span>In stock</span> <span>{productDetails.quantity}</span>
									</div>
								</div>
							</div>
							<div class="content-detail">
								<div class="price">
									<div class="regular">
										$2,999.00
									</div>
									<div class="sale">
										$1,589.00
									</div>
								</div>
								<div class="info-text">
                  {productDetails.desc}
								</div>
								<div class="product-id">
									SKU: <span class="id">FW511948218</span>
								</div>
							</div>
							<div class="footer-detail">
								<div class="quanlity-box">
									<div class="quanlity">
										<span class="btn-down"></span>
										<input type="number" name="number" value="" min="1" max="100" placeholder="Quanlity"/>
										<span class="btn-up"></span>
									</div>
								</div>
								<div class="box-cart style2">
									<div class="btn-add-cart">
										<a href="!#" title=""><img src="images/icons/add-cart.png" alt=""/>Add to Cart</a>
									</div>
									<div class="compare-wishlist">
										<a href="compare.html" class="compare" title=""><img src="images/icons/compare.png" alt=""/>Compare</a>
										<a href="compare.html" class="wishlist" title=""><img src="images/icons/wishlist.png" alt=""/>Wishlist</a>
									</div>
								</div>
								<div class="social-single">
									<span>SHARE</span>
									<ul class="social-list style2">
										<li>
											<a href="!#" title="">
												<i class="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="!#" title="">
												<i class="fa fa-twitter" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="!#" title="">
												<i class="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="!#" title="">
												<i class="fa fa-pinterest" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="!#" title="">
												<i class="fa fa-dribbble" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="!#" title="">
												<i class="fa fa-google" aria-hidden="true"></i>
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
