import React, { useState } from "react";
import { Documen, Page } from "react-pdf/dist/esm/entry.webpack";

const pdf = () => {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, set] = useState(null);
  return <div>pdf</div>;
};

export default pdf;
