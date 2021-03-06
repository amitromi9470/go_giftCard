import React from "react";
import "../NumberBox/NumberBox.css";

const NumberBox = (props) => {
  return (
    <div className="input">
      <input
        type="number"
        keyfilter="pnum"
        onChange={props.onChangeHandler}
        placeholder="Enter Valid Phone Number"
      />
    </div>
  );
};

export default NumberBox;
