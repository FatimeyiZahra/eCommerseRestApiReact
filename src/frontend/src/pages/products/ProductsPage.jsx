import React, { useState, useEffect } from "react";
import Seo from "../../app/seo/Seo";
import axios from "axios";
import "./style.css";

const ProductsPage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/sort-products")
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <>
      <div id="product">
        <Seo title="Products" />
        {products &&
          products.map((prd) => (
            <div className="col-3 card" key={prd._id}>
              <img src={prd.photos[0]} alt="" />
              <div className="content">
              <h3>{prd.name}</h3>
                <p>{prd.category.name}</p>
                <span>${prd.price}</span>
                <button>add to cart</button>
                {/* <button onClick={()=> addCart(prd._id)}>Add to cart</button> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsPage;
