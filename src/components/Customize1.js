import React from "react";
import Cheese from "../assets/Cheese-removebg-preview.png";
import Onion from "../assets/2-removebg-preview.png";
import Bread from "../assets/Bread-removebg-preview.png";
import Ketchup from "../assets/ketchup-removebg-preview.png";
// import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
// import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize1({ ingredients, setIngredients }) {
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
              y: ingredients["onion"] ? 100 : -100,
              opacity: ingredients["onion"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="onion z4"
          >
            <img src={Onion} alt="sandwich onion" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["ketchup"] ? 100 : -100,
              opacity: ingredients["ketchup"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ketchup z4"
          >
            <img src={Ketchup} alt="Sandwich Ketchup" height="100%" width="100%" />
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["pineapple"] ? 100 : -100,
              opacity: ingredients["pineapple"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z3"
          >
            <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["tomato"] ? 100 : -100,
              opacity: ingredients["tomato"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="tomato z4"
          >
            <img src={Tomato} alt="Tomato" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              // y: ingredients["cheese"] ? 100 : -100,
              // opacity: ingredients["cheese"] ? 1 : 0,
              scale: ingredients["cheese"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese1 z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="sadnwich mushroom" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} className="">
            <img src={Bread} alt="sandwich Base" height="100%" width="100%" />
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
          Onions
          <input
            type="checkbox"
            checked={ingredients["onion"]}
            onChange={(event) => onChange(event.currentTarget.checked, "onion")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Ketchup
          <input
            type="checkbox"
            checked={ingredients["ketchup"]}
            onChange={(event) => onChange(event.currentTarget.checked, "ketchup")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
        </label>
        <button
          onClick={() => history.push("/checkout1")}
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
