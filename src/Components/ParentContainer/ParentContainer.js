import React, { useState } from "react";
import BackGround from "../BackGround/BackGround";
import Card from "../Card/Card";
import NumberBox from "../NumberBox/NumberBox";
import Button from "../Button/Button";
import "./ParentContainer.css";

const ParentContainer = (props) => {
  const [phNumber, setPhNumber] = useState("");

  const onChangeHandler = (e) => {
    setPhNumber(e.target.value);
  };
  const onClickHandler = () => {
    window.localStorage.setItem("phNumber", phNumber);
    props.getPhNumber();
  };

  return (
    <div className="appContainer">
      <BackGround />
      <Card />
      <NumberBox onChangeHandler={onChangeHandler} />
      <Button
        disabled={phNumber.length !== 10}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default ParentContainer;
