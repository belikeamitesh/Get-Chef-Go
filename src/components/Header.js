import React from "react";
import Logo from "../assets/pizza logo.png";
export default function Header() {
  return (
    <div
      style={{
        background: "blue",
        padding: "30px 50px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="pizzalogo" height="40px" />
        <div
          style={{
            marginLeft: 20,
            fontSize: 30,
            color: "black",
            border: "1px solid black",
            background:"white",
            borderRadius:"30px",
            padding:"5px",
            fontFamily: "Alata,sans-serif",
          }}
        >
          Get Chef Go- "Make It Take It"
        </div>
      </div>
    </div>
  );
}
