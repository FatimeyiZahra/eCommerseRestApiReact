import React from "react";
import { addToCart } from "../../modules/cart";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductItemCarousel = ({
  id,
  name,
  photos,
  price,
  category,
  discount,
  percentage,
  isComing,
  isNew,
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
                    ${price - (price * discount.percentage) / 100}
                  </span>
                  <span className="regular">${price}</span>
                </>
              ) : (
                <span className="sale">${price}</span>
              )}
            </div>
            {discount != null ? (
              <span className="item-sale">-{discount.percentage}%</span>
            ) : (
              <span></span>
            )}
            {isNew === true ? (
              <span className="item-new">NEW</span>
            ) : (
              <span></span>
            )}
            {isComing === true ? (
              <span className="item-soon">SOON</span>
            ) : (
              <span></span>
            )}
            <div className="box-bottom2">
              <div className="btn-add-cart">
                <a
                  href="!"
                  title=""
                  onClick={() =>
                    addToCart({
                      id,
                      name,
                      price,
                    })
                  }
                >
                  <img src="images/icons/add-cart.png" alt="" />
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemCarousel;
