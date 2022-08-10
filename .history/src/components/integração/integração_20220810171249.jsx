import React from "react";

const Integracao = () => {

    fetch('http://localhost:3001/api/clientes/index')
        .then(resp => resp.json())
        .then(dados => console.log(dados))
  return (
    <div>
      <ul>
        <li>código:</li>
        <li>código:</li>
        <li>código:</li>
      </ul>
    </div>
  );
};

export default Integracao;
