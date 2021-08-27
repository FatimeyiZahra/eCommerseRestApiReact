import React from "react";
import Layout from "./layout/Layout";
import "./style.css";
import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/products/ProductsPage";
import CartPage from "../pages/cart/CartPage";
import CheckOutPage from "../pages/checkOut/CheckOutPage";
import NoMatch from "../pages/404/NoMatch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ComingSoon from "./section/cooming/ComingSoon";
import ProductDetails from "../pages/products/ProductDetails";
import PrdByCategory from "../pages/prdBycategory/PrdByCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* <div className="col-2">
              <Category />
            </div> */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route  path="/products/:id">
            <ProductsPage />
          </Route>

          <Route path="/products/:id">
            <ProductDetails />
          </Route>

          <Route exact path="/coming-soon">
            <ComingSoon />
          </Route>

          <Route exact path="/coming-soon/:id">
            <ProductDetails />
          </Route>
          {/* <Route exact path="/category/:id">
            <PrdByCategory />
          </Route> */}

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
      </Layout>
    </BrowserRouter>
  );
};

export default App;
