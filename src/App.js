import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import HeroDetails from './components/HeroDetails';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  // const apiKey = "16517c362976517adee91f273ed8cf81";
  const [hero, setHeros] = useState();
  
  

  return (
    <>
    {/* // <Router> */}
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path={'about'} element={<About />} /> */}
        <Route path='/:id' element={<HeroDetails />} />
      </Routes>
    {/* // </Router> */}
    <Footer />
    </>
  );
}

export default App;
