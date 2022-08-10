import React, { useState } from "react";
import { Documen, Page } from "react-pdf/dist/esm/entry.webpack";

const pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offSet){
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
  
    function changePageBack(){
      changePage(-1)
    }
  
    function changePageNext(){
      changePage(+1)
    }
  
  return <div>pdf</div>;
};

export default pdf;
