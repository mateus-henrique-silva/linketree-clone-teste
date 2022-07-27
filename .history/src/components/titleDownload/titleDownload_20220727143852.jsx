import React from "react";
import dwonload from '../../assets/icons/dwonload.svg'

const titleDownload = () => {
  return (
    <div>
      <div className="section">
        <p></p><div className="btn-text">

            <img src={dwonload}/>
            <p>baixar pdf</p>
        </div>
      </div>
    </div>
  );
};

export default titleDownload;
