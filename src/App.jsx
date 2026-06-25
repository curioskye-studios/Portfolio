import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import About from './pages/about/About';
import SocialSection from './components/SocialSection/SocialSection';
import './index.css'; 
import CreditSection from './components/CreditSection/CreditSection';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <SocialSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="/gallery/:category/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>             
      <CreditSection />
    </HashRouter>
  );
}