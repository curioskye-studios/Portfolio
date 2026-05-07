import { NavLink } from 'react-router-dom';
// import logoImg from '../assets/logo.png'; // Uncomment and import your logo image here

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        {/* Replace the span below with: <img src={logoImg} alt="CurioSkye Studios" /> */}
        <span style={{
          width: 34, height: 34,
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, border: '2px solid rgba(255,255,255,0.3)'
        }}>☁️</span>
        CurioSkye Studios
      </NavLink>

      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
}
