import React from "react";
import "./AssinaturaCompleta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const AssinaturaCompleta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <center> <div className="boxCorrect"></div></center> 
          <Link to="/concluido">text</Link>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaCompleta;
