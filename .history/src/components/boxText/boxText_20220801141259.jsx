// import React from 'react'
// import './boxText.css'
// import Iframe from "../../assets/pdf/cod.pdf"
// import PdfFrame from "../pdf/pdf"
// import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
import * as React from "react";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Demo from "./Demo";

const App = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.js">
      <Demo />
    </Worker>
  );
};

export default App;