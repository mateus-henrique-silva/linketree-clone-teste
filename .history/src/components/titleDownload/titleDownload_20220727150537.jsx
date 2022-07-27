import React from "react";
import './titleDownload.css'


const titleDownload = (props) => {
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             
        <Link to="/codigodeconduta"><img src={props.image} /></Link>

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
