import React from "react";
import './header.css';

const header = (props) => {
  return (
    <div>
      <div className="header">
        <img src={props.image} />
      </div>
    </div>
  );
};

export default header;
