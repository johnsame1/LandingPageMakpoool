import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/NavBar';
import Home from './Components/Pages/Home';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

function App() {
  useEffect(() => {
    // هنا بتحط الـ Pixel ID بتاعك
    ReactPixel.init("687884864344366");  
    ReactPixel.pageView(); // يسجل أول PageView
  }, []);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
