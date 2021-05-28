import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import Customize1 from "./components/Customize1";

function App() {
  const a=10;
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
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <Customize1
              ingredients={ingredients1}
              setIngredients={setIngredients1}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
          <Route path="/checkout1">
            <Checkout ingredients={ingredients1} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
