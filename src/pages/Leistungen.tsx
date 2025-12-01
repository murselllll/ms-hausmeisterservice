import PageWrapper from "../components/PageWrapper";
import s1 from "../assets/service1.jpg";
import s2 from "../assets/service2.jpg";
import s3 from "../assets/service3.jpg";
import s4 from "../assets/service4.jpg";

export default function Leistungen() {
  return (
    <PageWrapper>
      <h1>Unsere Leistungen</h1>

      <div className="service-grid">

        <div className="service-card">
          <img src={s1} alt="Hausmeisterservice" loading="lazy" />
          <h2>Hausmeisterservice</h2>
          <p>Objektkontrollen, Reinigung, Reparaturen, Winterdienst, Mülltonnen-Management.</p>
        </div>

        <div className="service-card">
          <img src={s2} alt="Grün- & Außenanlagen" loading="lazy" />
          <h2>Grün- & Außenanlagen</h2>
          <p>Rasen mähen, Heckenpflege, Unkrautentfernung, Laubarbeiten, Wegepflege.</p>
        </div>

        <div className="service-card">
          <img src={s3} alt="Montagearbeiten" loading="lazy" />
          <h2>Montagearbeiten</h2>
          <p>Möbelmontage, Regale, Küchenmodule, Reparaturen, Demontage.</p>
        </div>

        <div className="service-card">
          <img src={s4} alt="Wartung & Instandhaltung" loading="lazy" />
          <h2>Wartung & Instandhaltung</h2>
          <p>Anlagenkontrollen, Austausch defekter Teile, Diagnose, vorbeugende Wartung.</p>
        </div>

      </div>
    </PageWrapper>
  );
}
