import React from "react";
import './titleDownload.css'


const titleDownload = (props) => {
  return (
    <div className="center">
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
             
        <Link to="/conduta"><img src={props.image} />

        </div>
      </div>
    </div>
  );
};

export default titleDownload;
