import React from "react";
import './titleDownload.css';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const titleDownload = (props) => {
    const vaiparala = (caminho) => {
        console.log(caminho);
 
          window.location.href = 'https://drive.google.com/file/d/1wo6OqPzhPHXWMVK0BzsKRTamA072lJ-Y/view?usp=sharing'
          // ou
     
    
      };

    
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             <a onClick={vaiparala}><img src={props.image}/></a>
             
             <p>Baixar PDF</p>
    
    

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
