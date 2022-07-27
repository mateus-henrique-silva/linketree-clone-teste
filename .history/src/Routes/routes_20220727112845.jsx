import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../components/body/body'
import CodigoDeConduta from '../pages/CodigoDeConduta/CodigoDeConduta'


const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route  path="/" component={Home}  />
        <Route path="/conduta" />
      </BrowserRouter>
    </div>
  );
};

export default routes;
