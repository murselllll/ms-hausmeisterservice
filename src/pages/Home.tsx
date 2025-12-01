import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Ihr Hausmeisterservice in [Ort]</h1>
        <p>Professionell, zuverlässig und günstig – wir kümmern uns um alles rund ums Haus.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn primary">Unsere Services</a>
          <a href="#contact" className="btn secondary">Kostenlose Anfrage</a>
        </div>
      </div>
    </div>
  );
}
