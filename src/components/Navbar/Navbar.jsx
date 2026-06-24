import { NavLink } from 'react-router-dom';
import logoImg from '/logo-small-variant.png'; 
import './Navbar.css'
import SocialSection from '../SocialSection/SocialSection';

export default function Navbar() {

  return (
    <>
      <nav id="header-nav" className="navbar navbar-expand-lg py-4" >
        
        <div className="container-fluid padding-side">

          {/* Logo — left side */}
          <NavLink to="/" className="navbar-brand nav-logo">
            <div className='logo-container'>              
              <img id="logo-small" src={logoImg} alt="logo"/>
            </div>
          </NavLink>

          {/* Toggler — right side on mobile */}
          <button 
            className="navbar-toggler shadow-none ms-auto" 
            type="button" 
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas panel */}
          <div 
            className="offcanvas offcanvas-end" 
            tabIndex="-1" 
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">

              <div className="offcanvas-header">
                <button 
                  type="button" 
                  className="btn-close text-reset shadow-none" 
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                </button>
              </div>

              <div className="offcanvas-body">
                <ul 
                  className="nav-links navbar-nav text-center align-items-center justify-content-end flex-grow-1">
                    
                    <li>
                      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                      </NavLink>
                    </li>

                </ul>
              </div>
                  
            </div>
        </div>
      </nav>
    </>
  );
}