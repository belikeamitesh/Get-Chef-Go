import React from "react";
import Chicken from "../assets/chicken_toppings.png";
import Noodles from "../assets/noodles.png";
import Olive from "../assets/Olive.png";
// import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/ketchup.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Customize2({ ingredients, setIngredients }) {
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
            <img src={Basil} alt="Noodles Basil" height="100%" width="100%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["olive"] ? 100 : -100,
              opacity: ingredients["olive"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Olive} alt="Noodle Olive" height="100%" width="100%" />
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
              y: ingredients["mushroom"] ? 100 : -100,
              opacity: ingredients["mushroom"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Mushroom} alt="Noodles" height="100%" width="100%" />
          </motion.div>

          <motion.div transition={{ duration: 1 }} className="">
            <img src={Noodles} alt="Noodles Base" height="100%" width="100%" />
          </motion.div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 40 }}>
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
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
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
          onClick={() => history.push("/checkout2")}
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