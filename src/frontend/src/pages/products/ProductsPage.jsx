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
        <div className="row">
          <div className="col-12">
            <ul className="d-flex flex-wrap">
              {products &&
                products.map((prd) => (
                  <>
                    <div className="col-lg-2 card" key={prd.id}>
                      <img src={prd.photos[0]} alt="" />
                      <div className="content">
                        <h5>{prd.name}</h5>
                        <p>{prd.category.name}</p>
                        {/* {if(IsFree==true)} */}
                        <span>${prd.price}</span>
                        <button
                          className="add-to-cart"
                          onClick={() =>
                            addToCart({
                              prd,
                            })
                          }
                        >
                          add to cart
                        </button>
                        {/* <button onClick={()=> addCart(prd._id)}>Add to cart</button> */}
                      </div>
                    </div>
                  </>
                ))}
            </ul>
          </div>
        </div>
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
