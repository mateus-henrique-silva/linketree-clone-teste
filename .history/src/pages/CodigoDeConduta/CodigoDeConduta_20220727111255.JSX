import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const CodigoDeConduta = () => {
  return (
    <div>
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route path="/conduta" element={<CodigoDeConduta />}></Route>
      </BrowserRouter>
    </div>
  );
};

export default CodigoDeConduta;
