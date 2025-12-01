import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MS Hausmeisterservice</h3>
          <p>
            Ihr zuverlässiger Partner für professionelle Immobilienbetreuung 
            in Reutlingen und Umgebung.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Schnelllinks</h3>
          <ul>
            <li><Link to="/">Start</Link></li>
            <li><Link to="/leistungen">Leistungen</Link></li>
            <li><Link to="/info">Über uns</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>
            MS Hausmeisterservice<br />
            Musterstraße 123<br />
            72764 Reutlingen<br /><br />
            Tel: <a href="tel:+4971234567890">+49 (0) 7123 456 7890</a><br />
            E-Mail: <a href="mailto:info@ms-hausmeisterservice.de">
              info@ms-hausmeisterservice.de
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Öffnungszeiten</h3>
          <p>
            Montag - Freitag: 8:00 - 18:00<br />
            Samstag: 9:00 - 14:00<br />
            Sonntag: geschlossen<br /><br />
            <strong>Notdienst: 24/7</strong>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} MS Hausmeisterservice. Alle Rechte vorbehalten. | 
          <Link to="/impressum" style={{ marginLeft: '1rem' }}>Impressum</Link> | 
          <Link to="/datenschutz" style={{ marginLeft: '1rem' }}>Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}