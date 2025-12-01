import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import heroLogo from "../assets/hero.jpg";   // ← korrekt importiert
import "./navbar.css";

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

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={heroLogo} alt="MS Gebäudeservice Logo" />
        </Link>
        <span className="logo-text">MS Gebäudeservice</span>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="/leistungen">Leistungen</NavLink>
        </li>
        <li>
          <NavLink to="/ueber-uns">Über uns</NavLink>
        </li>
        <li>
          <a href="tel:+4915227760952" className="contact-btn">
            📞 +49 1522 7760952
          </a>
        </li>
      </ul>
    </nav>
  );
}
