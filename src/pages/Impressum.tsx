import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Impressum() {
  return (
    <PageWrapper>
      <section className="section">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Impressum
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '900px',
            margin: '2rem auto',
            background: 'white',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-md)',
            lineHeight: '1.8'
          }}
        >
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '0'
          }}>
            Angaben gemäß § 5 TMG
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ 
              fontSize: '1.05rem',
              color: 'var(--text-dark)',
              marginBottom: '0.5rem',
              fontWeight: 600
            }}>
              MS Gebäudeservice
            </p>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-gray)',
              margin: 0
            }}>
              Servicegebiet: 50 km um Kupferzell<br />
              Baden-Württemberg
            </p>
          </div>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Kontakt
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-gray)',
              margin: 0
            }}>
              Telefon: <a href="tel:+4915227760952" style={{ color: '#2563eb', textDecoration: 'none' }}>+49 152 27760952</a><br />
              E-Mail: <a href="mailto:kontakt@msgebaeudeservice.com" style={{ color: '#2563eb', textDecoration: 'none' }}>kontakt@msgebaeudeservice.com</a>
            </p>
          </div>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-gray)',
              margin: 0
            }}>
              MS Gebäudeservice<br />
              Servicegebiet: 50 km um Kupferzell
            </p>
          </div>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            EU-Streitschlichtung
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', marginLeft: '0.3rem' }}>
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Haftung für Inhalte
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
            Tätigkeit hinweisen.
          </p>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Haftung für Links
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
            Verlinkung nicht erkennbar.
          </p>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            Urheberrecht
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '0'
          }}>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--bg-light)',
            borderRadius: '16px',
            maxWidth: '900px',
            margin: '3rem auto 0'
          }}
        >
          <p style={{ 
            fontSize: '0.95rem',
            color: 'var(--text-gray)',
            marginBottom: '1rem'
          }}>
            Haben Sie Fragen zum Impressum oder zu unseren Leistungen?
          </p>
          <a href="/kontakt" className="btn primary">
            Kontaktieren Sie uns
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}