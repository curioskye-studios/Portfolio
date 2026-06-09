import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import About from './pages/about/About';
import SocialSection from './components/SocialSection/SocialSection';
import './index.css'; 

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SocialSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>     
        
      <h5 className='portfolio-credits'>© curioskye studios 2026</h5>
    </BrowserRouter>
  );
}
