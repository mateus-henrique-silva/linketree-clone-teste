import logo from './logo.svg';
import './App.css';
import Body from '../src/components/body/body'
import Rout from './Routes/routes'
i


function App() {
  return (
    <div className="App">
     <Router>
              <Routes>
                {/* <Route element={<Home />} path="/" exact /> */}
                <Route path="/conduta" element={<CodigoDeConduta />} />
              </Routes>
            </Router>
 
      
    </div>
  );
}

export default App;
