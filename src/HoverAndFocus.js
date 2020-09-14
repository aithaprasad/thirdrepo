import React from "react";
//import logo from "./logo.svg";
import "./HoverAndFocus.css";

function HoverAndFocus() {
  return (
    <div>
      <p className="container1">ReactJs Logo With Shadow</p>
      <div>
        <div className="container">
          <button>On Click Turns Green !!</button>
          <button>On Hover Turns Yellow</button>
        </div>
      </div>
    </div>
  );
}

export default HoverAndFocus;
