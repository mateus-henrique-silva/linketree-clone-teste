import React from "react";
import Empresa from "../../components/empresa/empresa";
import PdfView from "../../components/pdf/pdf";
import ArrowImage from "../../assets/icons/Aback.svg";
import Header from "../../components/header/header";
import BoxText from "../../components/boxText/boxText";
import Title from "../../components/titleDownload/titleDownload";
import Dwonload from "../../assets/icons/download.svg";
import { Container } from "../../components/Container/index";
const testOn = onSubmit{
  return console.log("Hello world");
}
const CodigoDeConduta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <Empresa />

          <Title image={Dwonload} />

          <PdfView />
          <center>
            <Container triggerText="Aceitar termos" onSubmit={onSubmit} />
          </center>
          {/*  onSubmit={onSubmit} */}
        </div>
      </div>
    </div>
  );
};

export default CodigoDeConduta;
