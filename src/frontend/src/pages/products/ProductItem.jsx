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
  isComing,
  isNew,
}) => {
  return (
    <div key={id} className="col-lg-4 col-sm-6">
      <div className="product-box">
        <div className="imagebox">
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

          <div className="box-image owl-carousel-1">
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
                    {" "}
                    ${price - (price * discount.percentage) / 100}
                  </span>
                  <span className="regular">${price}</span>
                </>
              ) : (
                <span className="sale">${price}</span>
              )}
            </div>
          </div>
          <div className="box-bottom">
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
            <div className="compare-wishlist">
              <a href="!#" className="compare" title="">
                <img src="images/icons/compare.png" alt="" />
                Compare
              </a>
              <a href="!#" className="wishlist" title="">
                <img src="images/icons/wishlist.png" alt="" />
                Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
