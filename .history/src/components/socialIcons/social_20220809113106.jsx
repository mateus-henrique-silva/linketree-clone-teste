import React from "react";
import "./social.css";
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"

const social = () => {
  const vaiparala = (caminho) => {
    console.log(caminho);

      window.location.href = 'https://drive.google.com/file/d/1wo6OqPzhPHXWMVK0BzsKRTamA072lJ-Y/view?usp=sharing'
      // ou
 

  };

  const vaiparalaT = (caminho) => {
    console.log(caminho);

      window.location.href = 'https://www.instagram.com/liderbrasildistribuidora/'
      // ou
 

  };
  return (
    <div className="social">
      <div className="social-style">
        {" "}
       <a onClick={vaiparala}><img src={facebook}/></a> 
       <a onClick={vaiparalaT}><img src={instagram}/></a> 
       
      </div>
    </div>
  );
};

export default social;
