import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Deliveryman from "../assets/delivery-removebg-preview.png";


export default function Checkout1({ ingredients }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ padding: 50, display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h1 style={{ fontFamily: "Comfortaa" }}>My Ingredient</h1>
          {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {
            return (
              ingredients[ingredient] && (
                <p>
                  {ingredient[0].toUpperCase()}
                  {ingredient.substr(1)}
                </p>
              )
            );
          })}
          <button
            className="proceedToCheckout"
            onClick={() => history.push("/sandwich")}
          >
            Go Back
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="proceedToCheckout"
            style={{ marginLeft: 10 }}
          >
            Confirm
          </button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center",border:"5px solid black",borderRadius:"10px"}}>
          <img src={Deliveryman} alt="deliveryman" height="300px" />
          <div style={{ fontSize: 35,margin:"auto" }}>
          Order Recieved, Thank you for ordering
          </div>
          <div>
            Your Order number is : Order #{Math.round(Math.random() * 100000)}
          </div>
          <div style={{fontSize: 20 ,marginBottom:"30px" }}>
            Your Drinks will be on the way in 20-30 min.
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
