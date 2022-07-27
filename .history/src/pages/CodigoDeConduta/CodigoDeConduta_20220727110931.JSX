import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";

const CodigoDeConduta = () => {
  return (
    <div>
            <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
    </div>
  )
}

export default CodigoDeConduta