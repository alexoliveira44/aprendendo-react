
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';


function App() {
  return (
   
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa </Link></li>
      </ul>
      <Routes>
        <Route path="/" exact element={ <Home />} />
        <Route path="/empresa" element={ <Empresa/> } /> 
      </Routes>

    </Router>

  );
}

export default App;
