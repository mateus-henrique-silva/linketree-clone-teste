import React from "react";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
import Carousel from "../../components/carousel/carousel";
import './PromocoesNoviades.css'
import Title from '../../components/title/title'

const PromocoesNoviades = (props) => {
let titulo;
  if(CaindexPrint == 0){
    
  }
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header tituloHeader ={titulo} image={ArrowImage} />
       
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default PromocoesNoviades;
