import React from "react";

const Integração = () => {

    fetch('http://localhost:3001/api/clientes/index')
        .then(resp=> resp.json())
        .then(dados => console.log())
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

export default Integração;
