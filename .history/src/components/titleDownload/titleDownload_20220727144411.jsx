import React from "react";
import Dwonload from "../../assets/icons/dwonload.svg";

const titleDownload = () => {
  return (
    <div>
      <div className="section">
        <p>Código de Conduta e Ética
Líder Brasil Distribuidora</p>
        <div className="btn-text">
          <img src={Dwonload} />
          <p>baixar pdf</p>
        </div>
      </div>
    </div>
  );
};

export default titleDownload;
