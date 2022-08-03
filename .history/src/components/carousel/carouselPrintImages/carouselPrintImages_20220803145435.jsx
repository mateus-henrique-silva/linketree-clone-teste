import React from 'react'
// import test from '../../../assets/images/carousel/'



const carouselPrintImages = (props) => {
  return (
    <div>
        <img src={require(props.imageSubs).defa} alt="DataBASE"/>
    </div>
  )
}

export default carouselPrintImages