// import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./carousel.css"

// const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };
// const carousel = () => {
//   return (
//     <div className="carouselTop">

// <Carousel responsive={responsive}>
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>;
//     </div>
//   )
// }

// export default carousel

import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";
import "./carousel.css";
import imageTest from "../../assets/images/carousel/img1.jpeg";
import ImageAnalise from "./carouselPrintImages/carouselPrintImages";
import testImages from '../../assets/images/';
let slides = [
  <img src={imageTest} alt="1" />,
  <img src={imageTest} alt="2" />,
  <img src={imageTest} alt="3" />,
  <img src={imageTest} alt="4" />,
  <img src={imageTest} alt="5" />,
];

//

// callback(index);
// console.log(indexTest);
//

const carousel = () => {
  var indexTest =t "path" + 0;
  const callback = function (index) {
    indexTest = "path" + index;
  };

  const srcImage = `../../../assets/images/carousel/${indexTest}/img1.jpeg`;
  return (
    <div className="carouselTop">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      ></link>
      <Carousel slides={slides} autoplay={false} onSlideChange={callback} />
      <ImageAnalise imageSubs={srcImage} />
    </div>
  );
};

export default carousel;
