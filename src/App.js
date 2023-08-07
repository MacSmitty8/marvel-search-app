import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import HeroDetails from './components/HeroDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        {/* <Route path={'about'} element={<About />} /> */}
        <Route path={'/:id'} element={<HeroDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
