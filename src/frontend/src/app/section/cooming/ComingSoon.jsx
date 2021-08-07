import React, { useState, useEffect } from "react";
import axios from "axios";
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
              <div className="col-3 card" key={soon.id}>
                <img src={soon.photos[0]} alt="" />
                <div className="content">
                  <h3>{soon.name}</h3>
                  <p>{soon.category.name}</p>
                  <span>${soon.price}</span>
                  <button>add to cart</button>
                  {/* <button onClick={()=> addCart(prd._id)}>Add to cart</button> */}
                </div>
              </div>
            ))}
        </div>
    </>
  );
};

export default ComingSoon;
