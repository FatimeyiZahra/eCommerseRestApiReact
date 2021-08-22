import React, { useContext, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import ContextCart from "../../app/cart/CartContext";
import alertify from "alertifyjs";

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
  // const cartItems = useContext(ContextCart)
  // console.log(ProductItem)
  const {addToCart} = useContext(ContextCart);
  // const [basket, setBasket] = useState([]);
  

  // const addToCart = (prd) => {
  //   const newBasket = [...basket];

  //   var addedProduct = newBasket.find((c) => c.product.id === prd.id);
  //   if (addedProduct) {
  //     Number((addedProduct.quantity += 1));
  //     console.log(addedProduct.quantity);
  //   } else {
  //     newBasket.push({ product: prd, quantity: 1 });
  //   }
  //   setBasket(newBasket);
  //   console.log(newBasket)
  //   alertify.success(prd.name + " added to cart!");
  // };
  
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
          <Link to={`/products/${id}`}>
            <div className="box-image owl-carousel-1">
              {/* <a href="!#" title=""> */}
              <img src={photos[0]} alt="" />
              {/* </a> */}
            </div>
          </Link>
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
              <span
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
              </span>
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
