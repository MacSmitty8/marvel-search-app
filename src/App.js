import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import HeroDetails from './components/HeroDetails';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        {/* <Route path={'about'} element={<About />} /> */}
        <Route path={'/:id'} element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
