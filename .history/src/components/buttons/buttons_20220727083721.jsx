import React from 'react'
import './buttons.css'
import { AiOutlineBook } from "react-icons/ai";
import bookopen from '../../assets/icons/book-open.svg'
import folder from '../../assets/icons/folder.svg'


const buttons = (props) => {
let imgone;
    
    if(props.id = "1"){
       imgone = bookopen;
    }  

    else{
        imgone = folder;
    }

    
    
  return (
    <div>
        
        <div className="button"> <img src={imgone} className="img" alt=""/>{props.text}</div>
    </div>
  )
}

export default buttons