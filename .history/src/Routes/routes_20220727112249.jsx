import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../components/body/body'
import CodigoDeConduta from '../pages/CodigoDeConduta/CodigoDeConduta'


const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route  path="/" element={<Home/>} exact />
        <Route path="/conduta" element={<CodigoDeConduta/>} />
      </BrowserRouter>
    </div>
  );
};

export default routes;