import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";
import Checkout1 from "./components/Checkout1";
import Checkout2 from "./components/Checkout2";
import Checkout3 from "./components/Checkout3";
import Checkout4 from "./components/Checkout4";
import Customize1 from "./components/Customize1";
import Home from "./components/Home";
import Customize2 from "./components/Customize2";
import Customize3 from "./components/Customize3";
import Customize4 from "./components/Customize4";
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
    onion: false,
    cheese: false,
    mushroom: false,
    ketchup: false,
    pineapple: false,
    tomato: false,
  });

  const [ingredients2, setIngredients2] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  const [ingredients3, setIngredients3] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  const [ingredients4, setIngredients4] = useState({
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
          <Route exact path="/noodles">
            <Customize2
              ingredients={ingredients2}
              setIngredients={setIngredients2}
            />
            </Route>
            <Route exact path="/drinks">
            <Customize3
              ingredients={ingredients3}
              setIngredients={setIngredients3}
            />
          </Route>
          <Route exact path="/burger">
            <Customize4
              ingredients={ingredients4}
              setIngredients={setIngredients4}
            />
            </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
          <Route path="/checkout1">
            <Checkout1 ingredients={ingredients1} />
          </Route>
          <Route path="/checkout2">
            <Checkout2 ingredients={ingredients2} />
          </Route>
          <Route path="/checkout3">
            <Checkout3 ingredients={ingredients3} />
          </Route>
          <Route path="/checkout4">
            <Checkout4 ingredients={ingredients4} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
