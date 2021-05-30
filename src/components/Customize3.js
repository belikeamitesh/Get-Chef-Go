import React from "react";
import Chicken from "../assets/chicken_toppings.png";
import Glass from "../assets/glass.png";
import Blue from "../assets/bluedrink.png";
import Stb from "../assets/stb.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/ketchup.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize3({ ingredients, setIngredients }) {
  let history = useHistory();

  const onChange = (event, name) => {
    console.log(localStorage);
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    newIngredients[name] = event;
    setIngredients(newIngredients);
    localStorage.setItem("ingredients", JSON.stringify(newIngredients));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: 40 }}>
        <div style={{ maxHeight: 500, maxWidth: 500, position: "relative" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["basil"] ? 100 : -100,
              opacity: ingredients["basil"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["water"] ? 100 : -100,
              opacity: ingredients["water"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Blue} alt="Pizza Base" height="500px" width="380px" style={{marginLeft:"60px"}} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["ketchup"] ? 100 : -100,
              opacity: ingredients["ketchup"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: ingredients["chicken"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <img src={Chicken} alt="Chicken" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["strawberry"] ? 100 : -100,
              opacity: ingredients["strawberry"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Stb} alt="strawberry" height="150px" width="150px" style={{marginLeft:"200px",marginTop:"100px"}}/>
          </motion.div>

          <motion.div transition={{ duration: 1 }} className="">
            <img src={Glass} alt="Glass Base" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 40 }}>
        {/* <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label> */}
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Water
          <input
            type="checkbox"
            checked={ingredients["water"]}
            onChange={(event) => onChange(event.currentTarget.checked, "water")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Ketchup
          <input
            type="checkbox"
            checked={ingredients["ketchup"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "ketchup")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Strawberry
          <input
            type="checkbox"
            checked={ingredients["strawberry"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "strawberry")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Chicken Toppings
          <input
            type="checkbox"
            checked={ingredients["Chicken"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "chicken")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button
          onClick={() => history.push("/checkout3")}
          className="proceedToCheckout"
        >
          Checkout
        </button>
        <button
          onClick={() => history.push("/")}
          className="proceedToCheckout"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}