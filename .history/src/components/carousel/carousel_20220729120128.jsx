import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carousel = () => {
  return (
    <div>
  
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
    </div>
  )
}

export default carousel