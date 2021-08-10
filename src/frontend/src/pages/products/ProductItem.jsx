import React from "react";
// import { If, Then, Else, Switch, Case } from "react-if";
import { addToCart } from "../../modules/cart";

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
      <div className="col-lg-2 card" key={id}>
        <img src={photos[0]} alt="" />
        <div className="content">
          <h5>{name}</h5>
          <p>{category.name}</p>
          {/* <If condition={discount != null}>
            <Then>
              <span className="text-muted"> {price}</span>
              <span>{discount.percentage}%endirim</span>
              <span className="ok"> {price - (price * discount.percentage) / 100}</span>
            </Then>
            <Else>
              <span>${price}</span>
            </Else>
          </If> */}
          {discount != null ? (
            <div>
              <span className="text-muted"> <del>{price}</del></span><br/>
              <span className="text-danger">{discount.percentage}%</span><br/>
              <span className="text-success"> {price - (price * discount.percentage) / 100}</span>
            </div>
          ) : (
            <span>${price}</span>
          )}

          {/* <button>add to cart</button> */}
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
    </>
  );
};

export default ProductItem;
