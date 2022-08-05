import React from 'react'
import './carouselPrint'




const carouselPrintImages = (props) => {
  return (
    <div className="align-sub-img">
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>
        <img className="img-sub-carousel" src={props.imageSubs} alt="DataBASE"/>

    </div>
  )
}

export default carouselPrintImages