import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MS Gebäudeservice</h3>
          <p>
            Ihr zuverlässiger Partner für professionelle Immobilienbetreuung 
            im Umkreis von 50 km um Kupferzell.
          </p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/ms_gebaudeservice/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Folgen Sie uns auf Instagram"
            >
              📷
            </a>
            <a 
              href="tel:+4915227760952" 
              aria-label="Telefon"
              title="Rufen Sie uns an"
            >
              📞
            </a>
            <a 
              href="mailto:kontakt@msgebaeudeservice.com" 
              aria-label="E-Mail"
              title="Schreiben Sie uns eine E-Mail"
            >
              ✉️
            </a>
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
            MS Gebäudeservice<br />
            Servicegebiet: 50 km um Kupferzell<br />
            Baden-Württemberg<br /><br />
            Tel: <a href="tel:+4915227760952">+49 152 27760952</a><br />
            E-Mail: <a href="mailto:kontakt@msgebaeudeservice.com">
              kontakt@msgebaeudeservice.com
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Erreichbarkeit</h3>
          <p>
            Montag - Freitag: 7:00 - 18:00<br />
            Samstag: 8:00 - 14:00<br />
            Sonntag: Nach Vereinbarung<br /><br />
            <strong>Notdienst verfügbar</strong>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} MS Gebäudeservice. Alle Rechte vorbehalten. | 
          <Link to="/impressum" style={{ marginLeft: '1rem' }}>Impressum</Link> | 
          <Link to="/datenschutz" style={{ marginLeft: '1rem' }}>Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}