import React from "react";
import Empresa from "../../components/empresa/empresa";

import ArrowImage from "../../assets/icons/Aback.svg";
import Header from "../../components/header/header";
import BoxText from "../../components/boxText/boxText";
import Title from "../../components/title/title";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CodigoDeConduta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />

          <Empresa />
          
          <Title
            text="Código de Conduta e Ética
Líder Brasil Distribuidora"
          />
          <BoxText t/>
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
