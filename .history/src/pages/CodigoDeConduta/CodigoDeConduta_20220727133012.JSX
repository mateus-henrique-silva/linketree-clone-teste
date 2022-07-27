import React from "react";
import Empresa from "../../components/empresa/empresa";
import { Route, BrowserRouter } from "react-router-dom";
import ArrowImage from "../../assets/icons/Aback.svg";
import Header from '../../components/header/header'

const CodigoDeConduta = () => {
  return (
    <div>

      <div className="background-lair">

        <div className="blur">
         <Header image={ArrowImage}/>
          <Empresa />
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
