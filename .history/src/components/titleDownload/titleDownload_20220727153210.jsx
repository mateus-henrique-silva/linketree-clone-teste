import React from "react";
import './titleDownload.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Link from 'https://drive.google.com/file/d/1LYbTPm9cz4_8SU-sP-dahSaAOB12ZJAh/view?usp=sharing'


const titleDownload = (props) => {
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             
        <a href={}><img src={props.image} /></a>

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
