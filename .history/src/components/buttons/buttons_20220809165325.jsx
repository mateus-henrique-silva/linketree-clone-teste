import React from "react";
import "./buttons.css";
import { AiOutlineBook } from "react-icons/ai";


const buttons = (props) => {


  // if ((props.id = "1")) {
  //   imgone = bookopen;
  // } else {
  //   imgone = folder;
  // }

  return (
    <div>
      <div className="button"  onClick={props.testCatalog}>
        {" "}
        <img src={props.image} className="img" alt="" /><p>
        {props.text}
        </p>
      </div>
    </div>
  );
};

export default buttons;
