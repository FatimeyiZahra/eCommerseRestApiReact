import React, { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../../app/seo/Seo";
import ProductsPage from "../products/ProductsPage";
import "../products/style.css"
import OwlCarousel from "react-owl-carousel";
import ProductItem from "../products/ProductItem";
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
     <Seo title='Welcome to the machine' />
     <ProductsPage/>
     <>
        <div className="container">
          <div className="row">
            <h1>Free product</h1>
            <div className="col-lg-12">
              <OwlCarousel className="slider-items owl-carousel" {...options}>
                {freeProducts &&
                  freeProducts.map((prd) => (
                    <ProductItem key={prd.id} {...prd} />
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="container">
          <div className="row">
            <h1>cooming soon products</h1>
            <div className="col-12">
              <OwlCarousel className="slider-items owl-carousel" {...options}>
                {cooming &&
                  cooming.map((prd) => <ProductItem key={prd.id} {...prd} />)}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default HomePage;
