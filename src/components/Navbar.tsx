import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import heroLogo from "../assets/hero.jpg";
import "./Navbar.css";  // ← Korrektur: Großbuchstabe

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Schließe Menü beim Klick auf einen Link
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={heroLogo} alt="MS Gebäudeservice Logo" />
        </Link>
        <span className="logo-text">MS Gebäudeservice</span>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü öffnen/schließen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Start</NavLink>
        </li>
        <li>
          <NavLink to="/leistungen" onClick={closeMenu}>Leistungen</NavLink>
        </li>
        <li>
          <NavLink to="/info" onClick={closeMenu}>Über uns</NavLink>
        </li>
        <li>
          <a href="tel:+4915227760952" className="contact-btn" onClick={closeMenu}>
            📞 +49 1522 7760952
          </a>
        </li>
      </ul>
    </nav>
  );
}