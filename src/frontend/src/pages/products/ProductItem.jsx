import React from "react";
import { addToCart } from "../../modules/cart";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductItem = ({
  id,
  name,
  photos,
  price,
  category,
  discount,
  percentage,
}) => {
  return (
    <>
      <div className="item">
        <div className="imagebox style4">
          <div className="box-image">
            <a href="!#" title="">
              <img src={photos[0]} alt="" />
            </a>
          </div>
          <div className="box-content">
            <div className="cat-name">
              <a href="!#" title="">
                {category.name}
              </a>
            </div>
            <div className="product-name">
              <a href="!#" title="">
                {name}
              </a>
            </div>
            <div className="price">
              {discount != null ? (
                <>
                  <span className="sale">
                    {price - (price * discount.percentage) / 100}
                  </span>
                  <span className="regular">{price}</span>
                </>
              ) : (
                <span className="current">{price}</span>
              )}
            </div>
            <button
            className="add-to-cart"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
              })
            }
          >
            add to cart
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
