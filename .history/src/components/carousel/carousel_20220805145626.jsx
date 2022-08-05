import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./carousel.css";
import imageTest from "../../assets/images/carousel/img1.jpeg";
import ImageAnalise from "./carouselPrintImages/carouselPrintImages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import JsTeste from './carouselPrintImages/test'
// import testtest from '../../assets/images/'

let slides = [
  <img src={imageTest} alt="1" />,
  <img src={imageTest} alt="2" />,
  <img src={imageTest} alt="3" />,
  <img src={imageTest} alt="4" />,
  <img src={imageTest} alt="5" />,
];

const CarouselTest = () => {
  // // const [indexPrint, setindexPrint] = useState(0);
  let [indexPrint, setIndexPrint] = useState(1);
  // let testanoAqui;
  const callback = function (index) {
    return setIndexPrint((indexPrint = index));
  };

  // var testFinal = c

  var testImages = "https://topexplorador.com/lider_brasil/";
  var indexTest = `${indexPrint}.jpg`;
  var indexNew = `${testImages}${indexTest}`;
  return (
    <div className="carouselTop">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      ></link>
      <Carousel slides={slides} autoplay={false} onSlideChange={callback} />
      <div className="img-change">
        
      <ImageAnalise imageSubs={indexNew} />
      </div>
    </div>
  );
};

export default CarouselTest;



