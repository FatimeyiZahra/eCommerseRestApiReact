import React, { useState, useEffect } from "react";
import Seo from "../../app/seo/Seo";
import axios from "axios";
import "../products/style.css";
import "./style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Category from "../../app/section/category/Category";
import ProductItem from "./ProductItem";
import Price from "..//../app/component/price/Price";
import Pagination from "../../app/component/pagination/Pagination";
import Sort from "../../app/component/sort/Sort";

const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  const [showCount, setShowCount] = useState(0);
  const [initialSlicer, setInitialSlicer] = useState(0)
  const [slicer, setSlicer] = useState(2);
  const [page, setPage] = useState(1);

  let iSlicer = 0;
  let _slicer = 2;
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/all-products")
      .then(res => {
        setProduct(res.data)
        setShowCount(Math.ceil(res.data.length / slicer))
    });
  }, []);
  const handleChange = (event, value) => {
    setPage(value);

    setInitialSlicer(_slicer * value - _slicer)
    setSlicer(_slicer * value)

};

  return (
    <section id="all">
      <Seo title="Products" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Category />
            <Price />
          </div>
          <div className="col-lg-9">
            <section className="flat-row flat-imagebox">
              <div className="container">
                <div className="box-product">
                  <div className="row">
                    <div className="row flat-row-title justify-content-between">
                      <div className="col-lg-8">
                        <h3>All Products</h3>
                      </div>
                     <Sort/>
                    </div>
                    {products &&
                      products.slice(initialSlicer,slicer).map((prd) => (
                        <ProductItem key={prd.id} {...prd} />
                      ))}
                  </div>
                </div>
              </div>
            </section>
            <Pagination count={showCount} page={page} onChange={handleChange} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
