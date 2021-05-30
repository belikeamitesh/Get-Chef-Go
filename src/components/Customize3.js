import React from "react";
import Red from "../assets/red.png";
import Pink from "../assets/strawberry.png";
import Glass from "../assets/glass.png";
import Blue from "../assets/bluedrink.png";
import Stb from "../assets/stb.png";
import Orange from "../assets/orange.png";
import Yellow from "../assets/yellow.png";
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
            <img src={Red} alt="Drinks" height="500px" width="380px" style={{marginLeft:"60px"}} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["Mango Shake"] ? 100 : -100,
              opacity: ingredients["Mango Shake"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Yellow} alt="Drinks" height="500px" width="380px" style={{marginLeft:"60px"}} />
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
            <img src={Blue} alt="Drinks" height="500px" width="380px" style={{marginLeft:"60px"}} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: ingredients["orange juice"] ? 100 : -100,
              opacity: ingredients["orange juice"] ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Orange} alt="Drinks" height="500px" width="380px" style={{marginLeft:"60px"}} />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: ingredients["strawberry shake"] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="cheese z1"
          >
            <img src={Pink} alt="Drinks" height="500px" width="380px" style={{marginLeft:"60px"}} />
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
          Mango Shake
          <input
            type="checkbox"
            checked={ingredients["Mango Shake"]}
            onChange={(event) => onChange(event.currentTarget.checked, "Mango Shake")}
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
          Orange Juice
          <input
            type="checkbox"
            checked={ingredients["orange juice"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "orange juice")
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
          Strawberry Shake
          <input
            type="checkbox"
            checked={ingredients["strawberry shake"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "strawberry shake")
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