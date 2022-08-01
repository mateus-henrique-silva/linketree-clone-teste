import React from "react";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
// import Carousel from "../../components/carousel/carousel"
// import {Carousel} from '3d-react-carousal';

const PromocoesNoviades = () => {
  return (
    <div>
      <Header image={ArrowImage} />
        <Carousel/>
    </div>
  );
};

export default PromocoesNoviades;
