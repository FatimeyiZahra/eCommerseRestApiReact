import React, { useState, useEffect } from "react";
import Seo from "../../app/seo/Seo";
import axios from "axios";
import "./style.css";
import ProductItem from "./ProductItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { addToCart } from "../../modules/cart";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  const [cooming, setCooming] = useState([]);
  const [freeProducts, setFreeProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/all-products")
      .then((res) => setProduct(res.data));
    axios
      .get("https://localhost:44368/v1/homepage/free-product")
      .then((res) => setFreeProduct(res.data));
    axios
      .get("https://localhost:44368/v1/homepage/coming-product")
      .then((res) => setCooming(res.data));
  }, []);

  return (
    <>
      <Seo title="Products" />
      <>
        <h1>all products</h1>
        <section className="flat-row flat-imagebox">
          <div className="container">
            <div className="box-product">
              <div className="row">
                {products &&
                  products.map((prd) => (
                    <div className="col-lg-3 col-sm-6">
                      <div className="product-box">
                        <div className="imagebox">
                          <span className="item-new">NEW</span>
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
                              <a
                                
                                title=""
                                onClick={() =>
                                  addToCart({
                                    prd,
                                  })
                                }
                              >
                                <img src="images/icons/add-cart.png" alt="" />
                                Add to Cart
                              </a>
                            </div>
                            <div className="compare-wishlist">
                              <a href="!#" class="compare" title="">
                                <img src="images/icons/compare.png" alt="" />
                                Compare
                              </a>
                              <a href="!#" class="wishlist" title="">
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
      <>
        <h1>Free product</h1>
        <div className="row">
          <div className="col-12">
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              {freeProducts &&
                freeProducts.map((prd) => (
                  <ProductItem key={prd.id} {...prd} />
                ))}
            </OwlCarousel>
          </div>
        </div>
      </>
      <>
        <h1>cooming soon products</h1>
        <div className="row">
          <div className="col-12">
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              {cooming &&
                cooming.map((prd) => <ProductItem key={prd.id} {...prd} />)}
            </OwlCarousel>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductsPage;
