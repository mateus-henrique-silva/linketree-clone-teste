import React, { useState } from "react";
import { Documen, Page } from "react-pdf/dist/esm/entry.webpack";

const pdf = () => {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  return <div>pdf</div>;
};

export default pdf;
