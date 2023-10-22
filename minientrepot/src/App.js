// import logo from './logo.svg';
import './App.css';
// import './App.scss';
import NavBarTest from './components/NavBarTest';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Footer from './components/Footer';
import Service from './pages/Service';
// import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBarTest />
      {/* <NavBar /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
