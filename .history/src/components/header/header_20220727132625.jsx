import React from "react";

const header = (props) => {
  return (
    <div>
      <div className="header">
        <img src={props.images} />
      </div>
    </div>
  );
};

export default header;
