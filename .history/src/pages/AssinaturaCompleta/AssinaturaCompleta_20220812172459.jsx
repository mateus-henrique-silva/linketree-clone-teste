import React from "react";
import "./AssinaturaCompleta.css";
import { BrowserRouter as Link } from "react-router-dom";
import Header from "../../components/header/header";

const AssinaturaCompleta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
            
          <Link to="/concluido"></Link>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaCompleta;
