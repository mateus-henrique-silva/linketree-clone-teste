import React from "react";

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route path="/conduta" element={<CodigoDeConduta />} />
      </BrowserRouter>
    </div>
  );
};

export default routes;
