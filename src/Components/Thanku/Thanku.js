import React from "react";
import "./Thanku.css";
import logo from "../../assets/success.jpg";


const Thanku = () => {
  return (
    <div className="thanku">
      <h1>Thanku</h1>
      <p className="message">
        <i>Your Phone Number Has Been Successfully Registered for Giftcard</i>
      </p>
      <img src={logo} className="image" alt="success"/>
    </div>
  );
};

export default Thanku;
