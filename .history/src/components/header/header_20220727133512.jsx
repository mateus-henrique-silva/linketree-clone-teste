import React from "react";
import './header.css';

const header = (props) => {
  return (
    <div>
      <div className="header">
      <Link to="/conduta"> <img src={props.image} /><Link></Link>
      </div>
    </div>
  );
};

export default header;
