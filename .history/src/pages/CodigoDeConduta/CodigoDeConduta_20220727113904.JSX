import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



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
