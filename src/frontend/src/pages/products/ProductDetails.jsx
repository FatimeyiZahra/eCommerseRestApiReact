import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = ({ match }) => {
  const [productDetails, setProductDetails] = useState([]);

  
  useEffect((id) => {
    axios
      .get("https://localhost:44368/v1/homepage/all-products/{match.params.id}")
      .then((res) => setProductDetails(res.data));
  }, []);
  console.log(productDetails)
  return (
    <div>
      asa
      {/* {productDetails &&
        productDetails.map((details) => (
          <div>
            <ul>
              <li>{details.desc}</li>
            </ul>
          </div>
        ))} */}
    </div>
  );
};

export default ProductDetails;
