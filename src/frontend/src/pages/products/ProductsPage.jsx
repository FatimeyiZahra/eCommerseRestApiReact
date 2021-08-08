import React, { useState, useEffect } from "react";
import Seo from "../../app/seo/Seo";
import axios from "axios";
import "./style.css";
import ProductItem from "./ProductItem";

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
          {products &&
            products.map((prd) => <ProductItem key={prd.id} {...prd} />)}
        </div>
      </>
      <>
        <h1>Free product</h1>
        <div className="row">
          {freeProducts &&
            freeProducts.map((prd) => <ProductItem key={prd.id} {...prd} />)}
        </div>
      </>
      <>
        <h1>cooming soon products</h1>
        <div className="row">
          {cooming &&
            cooming.map((soon) => <ProductItem key={soon.id} {...soon} />)}
        </div>
      </>
    </>
  );
};

export default ProductsPage;
