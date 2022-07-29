import React from 'react'
import './boxText.css'
import Iframe from "../../assets/pdf/cod.pdf"
import PdfFrame from "../pdf/pdf"

const boxText = (props) => {
  return (
    <div className="box">
        <div className="boxText">

          {/* <h1>{props.title}</h1>
          
            <p>
              
                {props.text}
            </p> */}
            <iframe src="https://topexplorador.com/lider_brasil/lbcde.pdf"></iframe>
        </div>  

<iframe src="https://topexplorador.com/lider_brasil/lbcde.pdf"></iframe>

    </div>
  )
}

export default boxText