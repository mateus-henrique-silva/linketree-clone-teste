import React from "react";
import './header.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const header = (props) => {
  return (
    <div>
      <div className="header">
      <Link to="/your-app-name"> <img src={props.image} /></Link>

     <p></p> {props.tituloHeader}
      </div>
    </div>
  );
};

export default header;
