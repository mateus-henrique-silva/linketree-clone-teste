import React from "react";
import "./logoFixed.css";
import logo from "../../assets/images/logoWhiteRed.png";

const logoFixed = () => {
  return (
    <div className="center-logo">
      <div className="img-logo">
        <img src={logo} className="logo" alt="" />
       
      </div>
      <p>Líder Brasil Distribuidora</p>
    </div>
  );
};

export default logoFixed;
