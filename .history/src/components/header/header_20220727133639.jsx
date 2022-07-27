import React from "react";
import './header.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const header = (props) => {
  return (
    <div>
      <div className="header">
      <Link to="/"> <img src={props.image} /></Link>
      </div>
    </div>
  );
};

export default header;
