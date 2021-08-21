import React, { useRef } from "react";

const Sort = () => {
  const selectref = useRef();
  const world=(e)=>{
    // console.log(selectref.current.value);
    e.preventDefault();
  }
  return (
    <div className="col-lg-3">
      <div className="sort">
        <form onSubmit={world}>
          <select
            ref={selectref}
            className="form-select"
          >
            <option value="DEFAULT" disabled>
              sort by:
            </option>
            <option value="priceAsc">high-low</option>
            <option value="priceDesc">low-high</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
