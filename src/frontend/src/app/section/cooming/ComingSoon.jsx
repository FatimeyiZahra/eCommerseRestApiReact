import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  "../../../pages/products/style.css";
import { addToCart } from "../../../modules/cart";
const ComingSoon = () => {
  const [cooming, setCooming] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/coming-product")
      .then((res) => setCooming(res.data));
  }, []);
  return (
    <>
         <section className="flat-row flat-imagebox">
          <div className="container">
            <div className="box-product">
              <div className="row">
                <h1>all products</h1>
                {cooming &&
                  cooming.map((prd) => (
                    <div key={prd.id} className="col-lg-3 col-sm-6">
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
                          <Link to={`/coming-soon/${prd.id}`}>
                            <a href="!#" title="">
                              <img src={prd.photos[0]} alt="" />
                            </a>
                            </Link>
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
                                      (prd.price * prd.discount.percentage) /
                                        100}
                                  </span>
                                  <span className="regular">${prd.price}</span>
                                </>
                              ) : (
                                <span className="sale">${prd.price}</span>
                              )}
                            </div>
                          </div>
                          <div className="box-bottom">
                            <div className="btn-add-cart">
                              <span href="!"
                                title=""
                                onClick={() =>
                                  addToCart({
                                    prd,
                                  })
                                }
                              >
                                <img src="images/icons/add-cart.png" alt="" />
                                Add to Cart
                              </span>
                            </div>
                            <div className="compare-wishlist">
                              <a href="!#" className="compare" title="">
                                <img src="images/icons/compare.png" alt="" />
                                Compare
                              </a>
                              <a href="!#" className="wishlist" title="">
                                <img src="images/icons/wishlist.png" alt="" />
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
     
    </>
  );
};

export default ComingSoon;
