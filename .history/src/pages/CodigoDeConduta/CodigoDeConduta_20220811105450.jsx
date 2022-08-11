import React from "react";
import Empresa from "../../components/empresa/empresa";
import PdfView from "../../components/pdf/pdf";
import ArrowImage from "../../assets/icons/Aback.svg";
import Header from "../../components/header/header";
import BoxText from "../../components/boxText/boxText";
import Title from "../../components/titleDownload/titleDownload";
import Dwonload from "../../assets/icons/download.svg";
import { Container } from "../../components/Container/index";
import { initializeApp } from "firebase/app";


const CodigoDeConduta = () => {
 

const firebaseApp= initializeApp({
  apiKey: "AIzaSyAdrSN_7gE_mNCC58xVpcSDoqqc57IN_WQ",
  authDomain: "lider-brasil-distribuidora.firebaseapp.com",
  projectId: "lider-brasil-distribuidora",
  storageBucket: "lider-brasil-distribuidora.appspot.com",
  messagingSenderId: "706465925245",
  appId: "1:706465925245:web:bafedfde969dd3aca94914",
  measurementId: "G-KS7QJDBBYV"
});

// Initialize Firebase


  const onSubmit = ()=>{
    return console.log("Hello world");
  }
  const 
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
