import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../components/body/body'
import CodigoDeConduta from '../pages/CodigoDeConduta/CodigoDeConduta'


const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route component={Home} e  path="/"   />
        <Route component={CodigoDeConduta}  path="/conduta" />
      </BrowserRouter>
    </div>
  );
};

export default routes;
