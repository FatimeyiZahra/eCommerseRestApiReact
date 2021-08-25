import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import ProductItemCarousel from "../../../pages/products/ProductItemCarousel";
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  loop: true,
  smartSpeed: 2000,
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

const RelativeProduct = () => {
  const [relativePrd, setRelativePrd] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://localhost:44368/V1/HomePage/relative-products?productId=${id}`
      )
      .then((res) => setRelativePrd(res.data));
  }, []);
  return (
    <div id="relative_product">
      <div className="container">
        <div className="row">
          <div className="flat-row-title">
            <h3>Relative Products</h3>
          </div>
          <div className="col-lg-12">
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              {relativePrd &&
                relativePrd.map((prd) => (
                  <ProductItemCarousel key={prd.id} {...prd} />
                ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelativeProduct;
