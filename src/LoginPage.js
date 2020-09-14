import React from "react";
//import logo from './logo.svg';
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login">
      <h3 className="color">Login to Your Account</h3>
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      <input type="submit"></input>
    </div>
  );
}

export default LoginPage;
