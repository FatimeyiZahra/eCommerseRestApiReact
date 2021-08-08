import React from "react";

const ProductItem = ({ id, name, photos, price, category }) => {
  return (
    <>
        <div className="col-lg-2 card" key={id}>
          <img src={photos[0]} alt="" />
          <div className="content">
            <h5>{name}</h5>
            <p>{category.name}</p>
            {/* {if(IsFree==true)} */}
            <span>${price}</span>
            <button>add to cart</button>
            {/* <button onClick={()=> addCart(prd._id)}>Add to cart</button> */}
          </div>
        </div>
    </>
  );
};

export default ProductItem;
