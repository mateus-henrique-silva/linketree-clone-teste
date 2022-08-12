import React from "react";
import "./AssinaturaCompleta.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../../components/header/header";
import ArrowImage from "../../assets/icons/Aback.svg";
import Empresa from "../../components/empresa/empresa";

const AssinaturaCompleta = () => {
  return (
    <div>
      <div className="background-lair">
        <div className="blur">
          <Header image={ArrowImage} />
          <Empresa />

          <center>
            {" "}
            <div className="boxCorrect">
              <svg
                width="285"
                height="285"
                viewBox="0 0 285 285"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M261.25 131.575V142.5C261.235 168.108 252.943 193.024 237.611 213.534C222.278 234.044 200.726 249.048 176.17 256.309C151.613 263.569 125.367 262.698 101.347 253.823C77.3261 244.949 56.8177 228.547 42.88 207.065C28.9424 185.583 22.3224 160.171 24.0073 134.619C25.6922 109.067 35.5917 84.7439 52.2295 65.2777C68.8672 45.8116 91.3517 32.2452 116.33 26.6017C141.308 20.9583 167.441 23.5402 190.831 33.9625"
                  stroke="#12B422"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M261.25 47.5L142.5 166.369L106.875 130.744"
                  stroke="#12B422"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                Sua assinatura foi <br></br>registrada
              </p>
            </div>
          </center>
          <Link to="/">
            <button className="buttonReturn">Voltar ao inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssinaturaCompleta;
