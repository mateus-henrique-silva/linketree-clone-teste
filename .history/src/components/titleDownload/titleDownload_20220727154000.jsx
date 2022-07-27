import React from "react";
import './titleDownload.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const titleDownload = (props) => {
    const vaiparala = (caminho) => {
        console.log(caminho);
        caminho === 'Linkedin' ? (
          window.location.href = 'https://www.linkedin.com/feed/'
          // ou
          window.location.replace('https://www.linkedin.com/feed/')
        ) : (
          history.push(`/${caminho}`)
        );
      };
    
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             
    
    

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
