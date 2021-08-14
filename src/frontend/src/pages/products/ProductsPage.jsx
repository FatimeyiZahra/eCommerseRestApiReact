import React, { useState, useEffect } from "react";
import Seo from "../../app/seo/Seo";
import axios from "axios";
import css from "../products/style.css";
import "./style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { addToCart } from "../../modules/cart";
import Category from "../../app/section/category/Category";

const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/all-products")
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <>
      <Seo title="Products" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Category />
          </div>
          <div className="col-lg-9">
            <select class="form-select" aria-label="Default select example">
              <option selected>sort by:</option>
              <option value="1">high-low</option>
              <option value="2">low-high</option>
            </select>
            <section className="flat-row flat-imagebox">
              <div className="container">
                <div className="box-product">
                  <div className="row">
                    <h1>all products</h1>
                    {products &&
                      products.map((prd) => (
                        <div key={prd.id} className="col-lg-4 col-sm-6">
                          <div className="product-box">
                            <div className="imagebox">
                              {prd.discount != null ? (
                                <span className="item-sale">
                                  -{prd.discount.percentage}%
                                </span>
                              ) : (
                                <span></span>
                              )}
                              {prd.isNew === true ? (
                                <span className="item-new">NEW</span>
                              ) : (
                                <span></span>
                              )}
                              {prd.isComing === true ? (
                                <span className="item-soon">SOON</span>
                              ) : (
                                <span></span>
                              )}

                              <div className="box-image owl-carousel-1">
                                <a href="!#" title="">
                                  <img src={prd.photos[0]} alt="" />
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="cat-name">
                                  <a href="!#" title="">
                                    {prd.category.name}
                                  </a>
                                </div>
                                <div className="product-name">
                                  <a href="!#" title="">
                                    {prd.name}
                                  </a>
                                </div>
                                <div className="price">
                                  {prd.discount != null ? (
                                    <>
                                      <span className="sale">
                                        {" "}
                                        $
                                        {prd.price -
                                          (prd.price *
                                            prd.discount.percentage) /
                                            100}
                                      </span>
                                      <span className="regular">
                                        ${prd.price}
                                      </span>
                                    </>
                                  ) : (
                                    <span className="sale">${prd.price}</span>
                                  )}
                                </div>
                              </div>
                              <div className="box-bottom">
                                <div className="btn-add-cart">
                                  <a
                                    title=""
                                    onClick={() =>
                                      addToCart({
                                        prd,
                                      })
                                    }
                                  >
                                    <img
                                      src="images/icons/add-cart.png"
                                      alt=""
                                    />
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="compare-wishlist">
                                  <a href="!#" className="compare" title="">
                                    <img
                                      src="images/icons/compare.png"
                                      alt=""
                                    />
                                    Compare
                                  </a>
                                  <a href="!#" className="wishlist" title="">
                                    <img
                                      src="images/icons/wishlist.png"
                                      alt=""
                                    />
                                    Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <></>
    </>
  );
};

export default ProductsPage;
