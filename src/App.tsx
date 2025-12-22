import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import Info from "./pages/Info";
import Kontakt from "./pages/Kontakt";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/info" element={<Info />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}