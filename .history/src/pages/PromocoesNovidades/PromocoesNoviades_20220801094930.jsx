import React from "react";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
// import Carousel from "../../components/carousel/carousel"
import {Carousel} from '3d-react-carousal';
let slides = [
  <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

const callback = function(index){
  console.log("callback",index);
}
const PromocoesNoviades = () => {
  return (
    <div>
      <Header image={ArrowImage} />
      <Carousel slides={slides} autoplay={true}  onSlideChange={callback}/>
    </div>
  );
};

export default PromocoesNoviades;
