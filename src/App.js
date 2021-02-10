import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./views/homePage/HomePage";
import CartPage from "./views/cart/CartPage";
import "./app.css";

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
