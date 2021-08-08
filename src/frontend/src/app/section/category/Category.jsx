import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Category = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44368/v1/homepage/categories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <>
      <ul className="list-group">
        {categories &&
          categories.map((cat) => (
            <li key={cat.id} className="list-group-item">
              {cat.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Category;
