
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Empresa from './pages/empresa/Empresa';

import Header from './components/header/Header';


function App() {
  return (



    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={ <Home />} />
        <Route path="/empresa" element={ <Empresa/> } /> 
      </Routes>

    </Router>

  );
}

export default App;
