import React from 'react'
import './carousel'




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