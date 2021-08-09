import React from "react";
import { If, Then, Else, Switch, Case, } from "react-if";

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
            <span>
              ${price} ...{discount.percentage}% endirimle indi- $
              {price - (price * discount.percentage) / 100}
            </span>
            
          ) : (
            <span>${price}</span>
          )}

          <button>add to cart</button>
          {/* <button onClick={()=> addCart(prd._id)}>Add to cart</button> */}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
