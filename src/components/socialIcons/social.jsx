import React from "react";
import "./social.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const social = () => {
  return (
    <div className="social">
      <div className="social-style">
        {" "}
        <AiFillFacebook />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default social;
