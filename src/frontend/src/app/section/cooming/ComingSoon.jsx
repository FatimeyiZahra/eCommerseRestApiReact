import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../../pages/products/ProductItem";
const ComingSoon = () => {
  const [cooming, setCooming] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/coming-product")
      .then((res) => setCooming(res.data));
  }, []);
  return (
    <>
      <h1>cooming soon products</h1>
      <div className="row">
          {cooming &&
            cooming.map((soon) => (
              <ProductItem key={soon.id} {...soon} />
            ))}
        </div>
    </>
  );
};

export default ComingSoon;
