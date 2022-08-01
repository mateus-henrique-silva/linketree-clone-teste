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
props
slides :- Array of react components
autoplay :- Boolean (true or false) - optional
interval :- number (time in milliseconds) - optional
arrows :- Boolean (true or false) - optional
onSlideChange :- callback function with index of the slide as argument - optional
You can give any component in the slides like images, divs or even your custom components

Keywords
reactcarousal3d-carousal
Install
npm i 3d-react-carousal

Repository
github.com/suhailsulu/react-carousel-3d

Homepage
github.com/suhailsulu/react-carousel-3d#readme

Weekly Downloads
1620

Version
5.0.0

License
MIT

Unpacked Size
36.8 kB

Total Files
11

Issues
10

Pull Requests
5

Last publish
5 months ago

Collaborators
suhailsulu
Try on RunKit

  );
};

export default PromocoesNoviades;
