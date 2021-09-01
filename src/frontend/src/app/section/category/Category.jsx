import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
const Category = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/categories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <div className="category">
      <h3>Categories</h3>
      <ul className="list-group">
        {categories &&
          categories.map((cat) => (
            <Link to={`/all-products/${cat.id}`}>
            <li key={cat.id} className="list-item">
             <span>{cat.name}</span> 
            </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Category;
