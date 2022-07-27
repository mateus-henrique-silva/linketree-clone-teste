import React from "react";
import Empresa from "../../components/empresa/empresa";

import ArrowImage from "../../assets/icons/Aback.svg";
import Header from '../../components/header/header';
import BoxText from '../../'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
