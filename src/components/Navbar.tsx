import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <span className="logo-text">MS Hausmeister</span>
        </Link>
      </div>

      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
          >
            Start
          </Link>
        </li>
        <li>
          <Link 
            to="/leistungen"
            className={location.pathname === "/leistungen" ? "active" : ""}
          >
            Leistungen
          </Link>
        </li>
        <li>
          <Link 
            to="/info"
            className={location.pathname === "/info" ? "active" : ""}
          >
            Über uns
          </Link>
        </li>
        <li>
          <Link 
            to="/kontakt"
            className={location.pathname === "/kontakt" ? "active" : ""}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}