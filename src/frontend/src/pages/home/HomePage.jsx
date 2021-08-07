import React from "react";
import ComingSoon from "../../app/section/cooming/ComingSoon";
import Seo from "../../app/seo/Seo";
import ProductsPage from "../products/ProductsPage";

const HomePage = () => {
  return (
    //it's react.fragment. it lok like div. the difference between them is - div has margin bla bla and i ll use <div>inside div inside div and i dont it cause of that i used react.fragment like <></> instead of i can write <react.fragmen> it s the same thing with <></>
    <>
     <Seo title='Welcome to the machine' />
     <ProductsPage/>
     <ComingSoon/>
    </>
  );
};

export default HomePage;
