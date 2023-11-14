import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './Pages/Home';
import FechData from './components/FechData';
import {
  BrowserRouter as Router,
  Routes,
 Route
} from 'react-router-dom'
import Footer from './components/Footer';
function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/bussiness" element={<FechData cat="business" />} />
      <Route  path="/entertainment" element={<FechData cat="Entertainment" />} />
      <Route  path="/health" element={<FechData cat="health" />} />
      <Route  path="/science" element={<FechData cat="science" />} />
      <Route  path="/sports" element={<FechData cat="sports" />} />
      <Route  path="/technology" element={<FechData cat="technology" />} />
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
