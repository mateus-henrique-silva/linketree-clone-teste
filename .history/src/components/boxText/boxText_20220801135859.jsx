import React from 'react'
import './boxText.css'
import Iframe from "../../assets/pdf/cod.pdf"
import PdfFrame from "../pdf/pdf"

const boxText = (props) => {
  return (
    <div className="box">
        {/* <div className="boxText">

          <h1>{props.title}</h1>
          
            <p>
              
                {props.text}
            </p>
            
        </div>   */}
        import { Viewer } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';

<Viewer fileUrl='/path/to/document.pdf' />


    </div>
  )
}

export default boxText