import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

const CodigoDeConduta = () => {
  return (
    <div>
      <BrowserRouter>
      <Route  path="/conduta" element={<CodigoDeConduta/>}>
                 
                 </Route>
      </BrowserRouter>
    </div>
  );
};

export default CodigoDeConduta;
