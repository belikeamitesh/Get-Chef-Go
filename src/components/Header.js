import React from "react";
import Logo from "../assets/Logo.png";
export default function Header() {
  return (
    <div
      style={{
        background: "blue",
        padding: "20px 40px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="pizzalogo" height="120px" style={{ borderRadius: "50%"}}/>
        <div
          style={{
            marginLeft: 20,
            fontSize: 30,
            color: "black",
            border: "1px solid black",
            background:"yellow",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            boxShadow:"10px 10px",
            // marginTop: "50px",
            height:"40px",
            width:"100%",
            borderRadius:"10px",
            padding:"2px",
            fontFamily: "Alata,sans-serif",
          }}
        >
          Get Chef Go- "Make It Take It"
        </div>
      </div>
    </div>
  );
}
