import { Link } from "react-router-dom";
import "./Navbar.css";
import hero from "../assets/hero.jpg"; // dein Logo

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">
          <img src={hero} alt="Logo" />
        </Link>
      </div>

      <ul className="links">
        <li><Link to="/">Start</Link></li>
        <li><Link to="/leistungen">Leistungen</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
