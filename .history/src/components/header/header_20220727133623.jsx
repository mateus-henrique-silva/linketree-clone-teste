import React from "react";
import './header.css';
<Link to="/conduta"></Link>

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
