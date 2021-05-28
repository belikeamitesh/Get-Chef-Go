import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import Checkout1 from "./components/Checkout1"
import Customize1 from "./components/Customize1";
import Home from "./components/Home";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  const [ingredients1, setIngredients1] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients1(JSON.parse(data));
    }
  }, []);


  

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route exact path="/sandwich">
            <Customize1
              ingredients={ingredients1}
              setIngredients={setIngredients1}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
          <Route path="/checkout1">
            <Checkout1 ingredients={ingredients1} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
