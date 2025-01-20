import React from "react";
import "../../styles/css/titletext.css";
const TitleText = ({ text }) => {
  return (
    <div className="title-div">
      <p className="text-lg">{text}</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
    </div>
  );
};

export default TitleText;
