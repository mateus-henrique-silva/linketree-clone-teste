import React from "react";
import './titleDownload.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const titleDownload = (props) => {
    const vaiparala = (caminho) => {
        console.log(caminho);
 
          window.location.href = 'hhttps://drive.google.com/file/d/1LYbTPm9cz4_8SU-sP-dahSaAOB12ZJAh/view?usp=sharing'
          // ou
     
    
      };

    
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             <a onClick={vaiparala}><img src={props.image}/></a>
    
    

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
