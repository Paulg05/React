import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasketView from "./components/BasketView";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <div className="p-4">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <BasketView />
          </Route>
          <Route path="/">

            <Product id="123" title="Air Jordans 21" price={500} />
            <Product id="999" title="J Cole: The Offseason" price={20} />
            <Product id="5678" title="Commonspace Beer" price={16} />
            <BasketView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
