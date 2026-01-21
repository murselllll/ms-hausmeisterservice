import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import heroLogo from "../assets/hero.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar wird nach 50px Scrollen eingefärbt
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Schließe Menü beim Klick auf einen Link
  const closeMenu = () => setMenuOpen(false);

  // Verhindere Scrollen wenn Mobile-Menü offen ist
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" onClick={closeMenu} className="logo">
        <img src={heroLogo} alt="MS Gebäudeservice Logo" />
        <span className="logo-text">MS Gebäudeservice</span>
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü öffnen/schließen"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Start
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/leistungen" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Leistungen
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/info" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Über uns
          </NavLink>
        </li>
        <li>
          <a 
            href="tel:+4915161598654" 
            className="contact-btn" 
            onClick={closeMenu}
          >
            📞 Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}