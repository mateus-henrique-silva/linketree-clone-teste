
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignatureGood from "./pages/AssinaturaCompleta/AssinaturaCompleta"
import CodigoDeConduta from './pages/CodigoDeConduta/CodigoDeConduta'
import Home from './pages/Home/Home'
import PromocoesNovidades from "./pages/PromocoesNovidades/PromocoesNoviades"




function App() {
  return (
    <div className="App">
concluido
     <Router>
              <Routes>
                 <Route element={<Home/>} path="/"  /> 
                <Route path="/conduta" element={<CodigoDeConduta/>} />
                <Route path="/promo" element={<PromocoesNovidades/>} />
                <Route path="/concluido" element={<SignatureGood/>} />
               
                <Route path="/codigodeconduta" element={()=>{ window.location.href = 'https://drive.google.com/file/d/1LYbTPm9cz4_8SU-sP-dahSaAOB12ZJAh/view?usp=sharing'}} exact/>
              </Routes>
            </Router>
 

      
    </div>
  );
}

export default App;
