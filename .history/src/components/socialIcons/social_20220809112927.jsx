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
  return (
    <div className="social">
      <div className="social-style">
        {" "}
       <a></a> <img src={facebook}/>
        <img src={instagram}/>
       
      </div>
    </div>
  );
};

export default social;
