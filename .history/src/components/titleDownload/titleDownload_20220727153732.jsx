import React from "react";
import './titleDownload.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const titleDownload = (props) => {
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             
        <a to="/codigodeconduta"><img src={props.image} /></a>

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
