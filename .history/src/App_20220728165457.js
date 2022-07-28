import logo from './logo.svg';
import './App.css';
import Body from '../src/components/body/body'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CodigoDeConduta from './pages/CodigoDeConduta/CodigoDeConduta'
import Home from './pages/Home/Home'
import PromocoesNovidades from "./components"
import Pdf from './assets/pdf/cod.pdf'


function App() {
  return (
    <div className="App">
     <Router>
              <Routes>
                 <Route element={<Home/>} path="/" exact /> 
                <Route path="/conduta" element={<CodigoDeConduta/>} />
                <Route path="/promo" element={<CodigoDeConduta/>} />
                <Route path="/codigodeconduta" element={()=>{ window.location.href = 'https://drive.google.com/file/d/1LYbTPm9cz4_8SU-sP-dahSaAOB12ZJAh/view?usp=sharing'}} exact/>
              </Routes>
            </Router>
 
      
    </div>
  );
}

export default App;
