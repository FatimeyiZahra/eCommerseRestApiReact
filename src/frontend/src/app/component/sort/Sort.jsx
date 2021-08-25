import React, { useRef } from "react";

const Sort = () => {
  const selectref = useRef();
  const sort=(e)=>{
    console.log(e.target.value);
  }
  return (
    <div className="col-lg-3">
      <div className="sort">
          <select
            onChange={(e)=>sort(e)}
            className="form-select"
          >
            <option value="DEFAULT" disabled>
              sort by:
            </option>
            <option value="priceAsc">low to high</option>
            <option value="priceDesc">high to low</option>
          </select>
      </div>
    </div>
  );
};

export default Sort;
