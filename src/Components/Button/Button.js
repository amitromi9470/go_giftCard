import React from "react";
import "../Button/Button.css";

const Button = (props) => {
  return (
    <div className="button">
      <input
        type="button"
        value="Wow! Get my paytm giftcard"
        disabled={props.disabled}
        onClick={props.onClickHandler}
      />
    </div>
  );
};

export default Button;
