import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Info() {
  return (
    <PageWrapper>
      {/* Hero Section mit Bild */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        minHeight: '450px',
        marginTop: '0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2))'
        }}></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '0 2rem',
            zIndex: 2
          }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'white',
            textShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}>
            Über MS Gebäudeservice
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            maxWidth: '700px',
            opacity: 0.95,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            Ihr zuverlässiger Partner für professionelle Immobilienbetreuung im Raum Kupferzell
          </p>
        </motion.div>
      </div>

      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}
        >
          <div style={{ 
            background: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '3rem'
          }}>
            <h2 style={{ 
              fontSize: '2rem',
              marginBottom: '1.5rem',
              color: '#2563eb'
            }}>
              Ihr Partner für professionelle Immobilienbetreuung
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-gray)',
              marginBottom: '1.5rem'
            }}>
              MS Gebäudeservice steht für zuverlässige und professionelle Betreuung 
              von Wohn- und Gewerbeimmobilien im Umkreis von 50 km um Kupferzell. 
              Mit Leidenschaft und Fachkompetenz kümmern wir uns um alle Aspekte 
              der Gebäudepflege und -instandhaltung.
            </p>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-gray)',
              marginBottom: '1.5rem'
            }}>
              Was uns auszeichnet, ist unser ganzheitlicher Ansatz: Wir kümmern 
              uns nicht nur um die offensichtlichen Aufgaben, sondern denken voraus 
              und erkennen potenzielle Probleme, bevor sie entstehen. So sparen Sie 
              Zeit, Geld und Nerven.
            </p>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-gray)'
            }}>
              Ob Privathaushalt, Wohnungseigentümergemeinschaft oder Gewerbeobjekt – 
              wir bieten Ihnen maßgeschneiderte Lösungen, die exakt auf Ihre 
              Bedürfnisse zugeschnitten sind.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>50km</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Servicegebiet</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                rund um Kupferzell
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>100%</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Zuverlässigkeit</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                auf uns ist Verlass
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>24/7</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Erreichbar</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                bei Notfällen
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ 
              background: 'var(--bg-light)',
              padding: '3rem',
              borderRadius: '16px',
              marginBottom: '3rem'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem',
              marginBottom: '2rem',
              color: 'var(--text-dark)',
              textAlign: 'center'
            }}>
              Unsere Werte
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { icon: '🤝', title: 'Zuverlässigkeit', text: 'Pünktlich und verlässlich – darauf können Sie sich verlassen.' },
                { icon: '⭐', title: 'Qualität', text: 'Höchste Standards bei allen unseren Dienstleistungen.' },
                { icon: '💼', title: 'Professionalität', text: 'Erfahrene Fachkräfte mit fundiertem Know-how.' },
                { icon: '❤️', title: 'Kundennähe', text: 'Persönlicher Service und individuelle Betreuung.' }
              ].map((value, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    marginBottom: '0.7rem',
                    color: '#2563eb'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.95rem',
                    color: 'var(--text-gray)'
                  }}>
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ 
              textAlign: 'center',
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              borderRadius: '16px',
              color: 'white'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              Überzeugt?
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              marginBottom: '2rem',
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Lernen Sie uns kennen und überzeugen Sie sich selbst von unserem Service. 
              Rufen Sie uns an unter <strong>+49 151 61598654</strong> oder kontaktieren 
              Sie uns über unser Kontaktformular.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/kontakt" className="btn primary">
                Jetzt Kontakt aufnehmen
              </a>
              <a 
                href="https://www.instagram.com/ms_gebaudeservice/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                📷 Instagram besuchen
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}