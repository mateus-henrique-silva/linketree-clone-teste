import React from "react";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
import Carousel from "../../components/carousel/carousel";
import './PromocoesNoviades.css'
import Title from '../../components/title/title'

const PromocoesNoviades = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <h1>Promoções de Hoje</h1>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default PromocoesNoviades;
