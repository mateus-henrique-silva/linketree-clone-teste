import React from "react";
import Empresa from "../../components/empresa/empresa";
import PdfView from "../../components/pdf/pdf";
import ArrowImage from "../../assets/icons/Aback.svg";
import Header from "../../components/header/header";
import BoxText from "../../components/boxText/boxText";
import Title from "../../components/titleDownload/titleDownload";
import Dwonload from "../../assets/icons/download.svg";
import { Container } from "../../components/Container/index";
import Child from "../../components/Form"
import "./CodigoDeConduta.css";

const CodigoDeConduta = (props) => {
  function changeButton() {
    console.log("botao mudando");
  }
  handleCallback = ( ) =>{
    console.log("hello world")
}
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <Empresa />

          <Title image={Dwonload} />

          <PdfView />
          <center>
            <Container parentCallback={handleCallback} triggerText="Aceitar termos" />
            <div className="btn-signature" id="btn-signature">Assinatura concluida</div>
          </center>

          {/*  onSubmit={onSubmit} */}
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
