import logo from './logo.svg';
import './App.css';
import Body from '../src/components/body/body'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rout from './Routes/routes'
import Home from './'


function App() {
  return (
    <div className="App">
     <Router>
              <Routes>
                 <Route element={<Home />} path="/" exact /> 
                <Route path="/conduta" element={<CodigoDeConduta />} />
              </Routes>
            </Router>
 
      
    </div>
  );
}

export default App;
