import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">MS Hausmeisterservice</div>

      <ul className="links">
        <li><Link to="/">Start</Link></li>
        <li><Link to="/leistungen">Leistungen</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
