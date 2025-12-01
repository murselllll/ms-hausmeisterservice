import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Info() {
  return (
    <PageWrapper>
      <section className="section">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Über MS Hausmeisterservice
        </motion.h1>

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
              color: 'var(--primary-blue)'
            }}>
              Ihr Partner für professionelle Immobilienbetreuung
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--text-gray)',
              marginBottom: '1.5rem'
            }}>
              Seit vielen Jahren betreuen wir mit Leidenschaft und Fachkompetenz 
              Wohn- und Gewerbeimmobilien in Reutlingen und Umgebung. Unser Team 
              besteht aus erfahrenen Fachkräften, die mit modernster Ausstattung 
              und fundiertem Know-how für Sie im Einsatz sind.
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
                background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-dark))',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>15+</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Jahre Erfahrung</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                im Hausmeisterservice
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, var(--accent-orange), #ff5722)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>200+</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Zufriedene Kunden</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                vertrauen auf uns
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #28a745, #218838)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>24/7</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Erreichbarkeit</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                für Notfälle
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
                    color: 'var(--primary-blue)'
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
              background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-dark))',
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
              Wir freuen uns auf Ihre Anfrage!
            </p>
            <a href="/kontakt" className="btn primary">
              Jetzt Kontakt aufnehmen
            </a>
          </motion.div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}