import React from "react";
import "./AssinaturaCompleta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
import Empresa from "../../components/";

const AssinaturaCompleta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <Empresa />

          <center>
            {" "}
            <div className="boxCorrect"></div>
          </center>
          <Link to="/concluido">text</Link>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaCompleta;
