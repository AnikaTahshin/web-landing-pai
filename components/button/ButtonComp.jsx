import React from "react";
import "../../styles/css/button.css";
const ButtonComp = ({ text }) => {
  console.log("see props", text);
  return <div className="">
    <button className="button-style">{text}</button>
    </div>;
};

export default ButtonComp;
