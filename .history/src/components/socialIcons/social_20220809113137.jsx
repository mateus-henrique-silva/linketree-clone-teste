import React from "react";
import "./social.css";
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"

const social = () => {
  const vaiparala = (caminho) => {
    console.log(caminho);

      window.location.href = 'https://www.facebook.com/search/top?q=l%C3%ADder%20brasil%20distribuidora'
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
