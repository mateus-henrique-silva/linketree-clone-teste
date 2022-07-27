import React from "react";
import Empresa from "../../components/empresa/empresa";
import { Route, BrowserRouter } from "react-router-dom";
import ArrowImage from "../../assets/icons/arrow.svg";

const CodigoDeConduta = () => {
  return (
    <div>

      <div className="background-lair">

        <div className="blur">
         
          <Empresa />
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
