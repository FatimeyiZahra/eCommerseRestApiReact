import React from "react";
import Layout from "./layout/Layout";
import "./style.css";
import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/products/ProductsPage";
import CartPage from "../pages/cart/CartPage";
import CheckOutPage from "../pages/checkOut/CheckOutPage";
import NoMatch from "../pages/404/NoMatch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Category from "./section/category/Category";
import ComingSoon from "./section/cooming/ComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div className="row">
          <div className="col-2">
            <Category />
          </div>
          <div className="col-10">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route path="/products">
                <ProductsPage />
              </Route>
              <Route path="/coming-soon">
                <ComingSoon />
              </Route>
              <Route path="/cart">
                <CartPage />
              </Route>

              <Route path="/checkout">
                <CheckOutPage />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
