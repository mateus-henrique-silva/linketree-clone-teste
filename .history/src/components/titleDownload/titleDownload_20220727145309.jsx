import React from "react";
import './titleDownload.css'


const titleDownload = (props) => {
  return (
    <div>
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
          <img src={props.image} />
          <p>baixar pdf</p>
        </div>
      </div>
    </div>
  );
};

export default titleDownload;
