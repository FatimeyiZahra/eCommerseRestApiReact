import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Category from "../../app/section/category/Category";
import Price from "../../app/component/price/Price";
import Seo from "../../app/seo/Seo";
import ProductItem from "../products/ProductItem";
const PrdByCategory = () => {
  const { id } = useParams();
  const [prdByCategory, setprdByCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:44368/V1/HomePage/all-products/${id}`)
      .then((res) => setprdByCategory(res.data));
  },[]);
  console.log(prdByCategory)

  return(
    <section id="all">
    <Seo title="Category" />
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
                  </div>
                  {prdByCategory && prdByCategory.map(prd=>(
                      <ProductItem key={prd.id} {...prd} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>

  );
};

export default PrdByCategory;
