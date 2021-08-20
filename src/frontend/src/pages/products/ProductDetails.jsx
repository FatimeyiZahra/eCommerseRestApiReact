import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetails = (props) => {
  const [productDetails, setProductDetails] = useState([]);
  const {id}= useParams();
  useEffect(() => {
    axios
      .get(`https://localhost:44368/v1/homepage/all-products/${id}`)
      .then((res) => setProductDetails(res.data));
  }, []);
 console.log(productDetails)
  return (
    <div>
    {productDetails.name}
    {productDetails.desc}
    <img src={productDetails.photos}/>
    
    </div>
  );
};

export default ProductDetails;
