import React, { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../../app/seo/Seo";
import ProductsPage from "../products/ProductsPage";
import "../products/style.css";
import OwlCarousel from "react-owl-carousel";
import ProductItemCarousel from "../products/ProductItemCarousel";
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  smartSpeed: 2000,
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
const HomePage = () => {
  const [cooming, setCooming] = useState([]);
  const [freeProducts, setFreeProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/free-product")
      .then((res) => setFreeProduct(res.data));
    axios
      .get("https://localhost:44368/v1/homepage/coming-product")
      .then((res) => setCooming(res.data));
  }, []);
  return (
    //it's react.fragment. it lok like div. the difference between them is - div has margin bla bla and i ll use <div>inside div inside div and i dont it cause of that i used react.fragment like <></> instead of i can write <react.fragmen> it s the same thing with <></>
    <>
      <Seo title="Welcome to the machine" />
      <ProductsPage />
      <section id="free">
        <div className="container">
          <div className="row">
            <div className="flat-row-title">
              <h3>Free Products</h3>
            </div>
            <div className="col-lg-12">
              <OwlCarousel className="slider-items owl-carousel" {...options}>
                {freeProducts &&
                  freeProducts.map((prd) => (
                    <ProductItemCarousel key={prd.id} {...prd} />
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section id="soon">
        <div className="container">
          <div className="row">
            <div className="flat-row-title">
              <h3>Coming Soon</h3>
            </div>
            <div className="col-12">
              <OwlCarousel className="slider-items owl-carousel" {...options}>
                {cooming &&
                  cooming.map((prd) => (
                    <ProductItemCarousel key={prd.id} {...prd} />
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomePage;
