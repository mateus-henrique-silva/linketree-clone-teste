import React from "react";
import Button from "../buttons/buttons";
import "./body.css";
import Title from "../title/title";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from '../body/body.js'
import Bookopen from "../../assets/icons/book-open.svg";
import Book from "../../assets/icons/book.svg";
import Folder from "../../assets/icons/folder.svg";
import Download from "../../assets/icons/download.svg";
import Empresa from "../empresa/empresa";
const pro = (caminho) => {
  console.log(caminho);

    window.location.href = 'https://topexplorador.com/lider_brasil/lb-catalogo-provedor.pdf'
    // ou


};

const Cftv = (caminho) => {
  console.log(caminho);

    window.location.href = 'https://topexplorador.com/lider_brasil/lb-catalogo-cftv.pdf'
    // ou


};
const body = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Empresa />
          <div className="box-buttons">
            <Title text="Colaborador Líder Brasil" />
           
            <Link to="/conduta">
              {" "}
              <Button text="Código de Conduta" image={Book}></Button>
            </Link>
       
          </div>
          <div className="box-buttons">
            <Button text="Catálogo de Provedor" image={Bookopen} />
          </div>
          <div className="box-buttons">
            <Button text="Catálogo Segurança Eletrônica" image={Bookopen} />
          </div>
          <div className="box-buttons">
            <Title text="Divulgação" />
            <Link to="/promo">
            <Button text="Promoções e Novidades" image={Folder} />
            </Link>
          </div>
          <div className="box-buttons">
            <Button text="Marketing e Vendas" image={Folder} />
          </div>

          <div className="box-buttons">
            <Title text="Documentos e Links" />
            <Button text="Documentos" image={Folder} />
          </div>
          <div className="box-buttons">
            <Button text="Downloads" image={Download} />
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default body;
