import PageWrapper from "../components/PageWrapper";
import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <PageWrapper>
      <div className="hero-container">
        <img src={hero} className="hero-img" alt="Hero" />

        <div className="hero-text">
          <h1>Ihr moderner Hausmeisterservice</h1>
          <p>Professionell – zuverlässig – kompetent.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
