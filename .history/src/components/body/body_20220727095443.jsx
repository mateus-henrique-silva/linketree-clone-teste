import React from "react";
import Button from "../buttons/buttons";
import "./body.css";
import Title from "../title/title";
import SocialIcons from "../socialIcons/social";
import LogoFixed from "../logoFixed/logoFixed";
import Bookopen from '../../assets/icons/book-open.svg'
import Book from '../../assets/icons/book.svg'
import Folder from '../../assets/icons/folder.svg'



const body = () => {
  return (
    <div>
    <div className="background-lair">
      <div className="blur">
      <LogoFixed />
      <SocialIcons />
      <div className="box-buttons">
        <Title text="Colaborador Líder Brasil" />
        <Button text="Código de Conduta" image={Book} ></Button>
      </div>
      <div className="box-buttons">
        <Button text="Catálogo de Provedor" image={Bookopen} />
      </div>
      <div className="box-buttons">
        <Button text="Catálogo Segurança Eletrônica" image={Bookopen}/>
      </div>
      <div className="box-buttons">
        <Title text="Divulgação" />
        <Button text="Promoções e Novidades" />
      </div>
      <div className="box-buttons">
        <Button />
      </div>
   
      <div className="box-buttons">
        <Title text="Documentos e Links" />
        <Button />
      </div>
      <div className="box-buttons">
        <Button />
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
