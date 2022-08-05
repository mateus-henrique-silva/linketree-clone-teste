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

import React,{ useState }from "react";
import { Carousel } from "3d-react-carousal";
import "./carousel.css";
import imageTest from "../../assets/images/carousel/img1.jpeg";
import ImageAnalise from "./carouselPrintImages/carouselPrintImages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
let[indexPrint, setIndexPrint] = useState(1);
// let testanoAqui;
const callback = function (index) {
  return setIndexPrint(indexPrint = index);

}

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
      <Router>
      <ImageAnalise imageSubs={indexNew} />
      </Router>
    </div>
  );
};

export default CarouselTest;

<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</div>
</Router>