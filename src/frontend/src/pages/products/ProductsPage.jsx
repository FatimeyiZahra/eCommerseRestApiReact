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

const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/all-products")
      .then((res) => setProduct(res.data));
  }, []);

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
            {/* <div className="row justify-content-end">
              <div className="col-lg-3">
                <div className="sort">
                  <select className="form-select">
                    <option selected>sort by:</option>
                    <option value="1">high-low</option>
                    <option value="2">low-high</option>
                  </select>
                </div>
              </div>
            </div> */}
            <section className="flat-row flat-imagebox">
              <div className="container">
                <div className="box-product">
                  <div className="row">
                    <div class="row flat-row-title justify-content-between">
                      <div className="col-lg-8">
                        <h3>All Products</h3>
                      </div>
                      <div className="col-lg-3">
                        <div className="sort">
                          <select className="form-select">
                            <option selected>sort by:</option>
                            <option value="1">high-low</option>
                            <option value="2">low-high</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {products &&
                      products.map((prd) => (
                        <ProductItem key={prd.id} {...prd} />
                      ))}
                  </div>
                </div>
              </div>
            </section>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
