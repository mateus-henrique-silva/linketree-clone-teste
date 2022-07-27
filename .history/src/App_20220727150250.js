import logo from './logo.svg';
import './App.css';
import Body from '../src/components/body/body'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rout from './Routes/routes'
import CodigoDeConduta from './pages/CodigoDeConduta/CodigoDeConduta'
import Home from './pages/Home/Home'
import Pdf from './assets/pdf/'


function App() {
  return (
    <div className="App">
     <Router>
              <Routes>
                 <Route element={<Home/>} path="/" exact /> 
                <Route path="/conduta" element={<CodigoDeConduta/>} />
                <Route path="/codigodeconduta" element={} exact/>
              </Routes>
            </Router>
 
      
    </div>
  );
}

export default App;
