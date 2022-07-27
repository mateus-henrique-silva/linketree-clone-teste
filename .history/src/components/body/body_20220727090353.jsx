import React from "react";
import Button from "../buttons/buttons";
import "./body.css";
import Title from "../title/title";
import SocialIcons from "../socialIcons/social";
import LogoFixed from "../logoFixed/logoFixed";
import

const body = () => {
  return (
    <div>
    <div className="background-lair">
      <LogoFixed />
      <SocialIcons />
      <div className="box-buttons">
        <Title text="Colaborador Líder Brasil" />
        <Button text="ola mundo" ></Button>
      </div>
      <div className="box-buttons">
        <Button />
      </div>
      <div className="box-buttons">
        <Button />
      </div>
      <div className="box-buttons">
        <Title text="Divulgação" />
        <Button />
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
  );
};

export default body;
