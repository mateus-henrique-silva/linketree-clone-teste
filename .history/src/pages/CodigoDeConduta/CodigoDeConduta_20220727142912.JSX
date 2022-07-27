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
          <BoxText
            text="
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          
          
          "
          />
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
