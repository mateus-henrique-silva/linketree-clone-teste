import React from "react";
import "./AssinaturaCompleta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
import Empresa from "../../components/empresa/empresa";

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
          <Link to="/concluido"><button className="bu">Voltar ao inicio</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaCompleta;
