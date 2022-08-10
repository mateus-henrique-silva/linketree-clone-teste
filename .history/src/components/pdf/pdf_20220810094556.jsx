import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import "./pdf.css";

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <>
      <center>
        <header className="App-header">
          <Document file="/cod.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="700" width="350" pageNumber={pageNumber} />
          </Document>
          <p>
            {" "}
            Page {pageNumber} of {numPages}
          </p>
          {pageNumber > 1 && (
            <button onClick={changePageBack}><img src={arrowLeft}></img></button>
          )}
          {pageNumber < numPages && (
            <button onClick={changePageNext}><img src={arrowRight}</button>
          )}
        </header>
      </center>
      {/* <center>
        <div>
          <Document file="/cod.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </center> */}
    </>
  );
};

export default Pdf;
