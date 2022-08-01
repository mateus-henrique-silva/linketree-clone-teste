import React from "react";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
// import Carousel from "../../components/carousel/carousel"
import {Carousel} from '3d-react-carousal';

const PromocoesNoviades = () => {
  return (
    <div>
      <Header image={ArrowImage} />
      <Carousel slides={slides} autoplay={true} interval={1000} onSlideChange={callback}/>
    </div>
  );
};

export default PromocoesNoviades;
