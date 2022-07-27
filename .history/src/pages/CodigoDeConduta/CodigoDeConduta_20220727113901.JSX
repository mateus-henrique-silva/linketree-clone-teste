import React from "react";
import { Route, BrowserRouter } from "react-router-dom";



const CodigoDeConduta = () => {
  return (
    <div>
      <Router>
              <Routes>
                {/* <Route element={<Home />} path="/" exact /> */}
                <Route path="/conduta" element={<CodigoDeConduta />} />
              </Routes>
            </Router>
    </div>
  );
};

export default CodigoDeConduta;
