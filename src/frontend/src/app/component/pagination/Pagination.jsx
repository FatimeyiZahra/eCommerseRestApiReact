import React from "react";
import "./style.css"

const Pagination = () => {
  return (
    <div className="blog-pagination">
      <span>Showing 1–15 of 20 results</span>
      <ul className="flat-pagination style1">
        <li className="prev">
          <a href="!#" title="">
            <i className="fas fa-long-arrow-alt-left"></i>Prev Page
          </a>
        </li>
        <li>
          <a href="!#" className="waves-effect" title="">
            01
          </a>
        </li>
        <li>
          <a href="!#" className="waves-effect" title="">
            02
          </a>
        </li>
        <li className="active">
          <a href="!#" className="waves-effect" title="">
            03
          </a>
        </li>
        <li>
          <a href="!#" className="waves-effect" title="">
            04
          </a>
        </li>
        <li className="next">
          <a href="!#" title="">
            Next Page<i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
  );
};

export default Pagination;
