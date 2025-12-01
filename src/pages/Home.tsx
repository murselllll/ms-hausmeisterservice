import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Ihr zuverlässiger Hausmeisterservice in Reutlingen</h1>
          <p>
            Professionelle Betreuung von Wohn- und Gewerbeimmobilien. 
            Wir kümmern uns um alles – damit Sie sich zurücklehnen können.
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn primary">
              Kostenlose Anfrage
            </Link>
            <a href="#services" className="btn secondary">
              Unsere Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Services Overview Section */}
      <motion.section 
        id="services" 
        className="section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Unsere Leistungen
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeInUp}>
          Von der Objektbetreuung bis zur Gartenpflege – wir bieten Ihnen 
          ein umfassendes Leistungspaket für Ihre Immobilie.
        </motion.p>

        <div className="service-grid">
          <motion.div className="service-card" variants={fadeInUp}>
            <img 
              src="/placeholder-service1.jpg" 
              alt="Hausmeisterservice" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80';
              }}
            />
            <div className="service-card-content">
              <h3>Hausmeisterservice</h3>
              <p>
                Regelmäßige Objektkontrollen, Reinigung von Gemeinschaftsflächen, 
                Reparaturen und mehr – wir halten Ihre Immobilie in Schuss.
              </p>
            </div>
          </motion.div>

          <motion.div className="service-card" variants={fadeInUp}>
            <img 
              src="/placeholder-service2.jpg" 
              alt="Grünanlagen" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80';
              }}
            />
            <div className="service-card-content">
              <h3>Grün- & Außenanlagen</h3>
              <p>
                Rasenpflege, Heckenschnitt, Unkrautentfernung und Laubbeseitigung – 
                für gepflegte Außenanlagen das ganze Jahr über.
              </p>
            </div>
          </motion.div>

          <motion.div className="service-card" variants={fadeInUp}>
            <img 
              src="/placeholder-service3.jpg" 
              alt="Montagearbeiten" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80';
              }}
            />
            <div className="service-card-content">
              <h3>Montagearbeiten</h3>
              <p>
                Von Möbelmontage bis zu kleinen Reparaturen – 
                wir erledigen handwerkliche Arbeiten schnell und zuverlässig.
              </p>
            </div>
          </motion.div>

          <motion.div className="service-card" variants={fadeInUp}>
            <img 
              src="/placeholder-service4.jpg" 
              alt="Winterdienst" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80';
              }}
            />
            <div className="service-card-content">
              <h3>Winterdienst</h3>
              <p>
                Schneeräumung und Streudienst für sichere Wege und Zufahrten – 
                auch bei Schnee und Eis sind wir für Sie da.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="section"
        style={{ background: 'var(--bg-light)' }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Warum MS Hausmeisterservice?
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeInUp}>
          Wir sind Ihr verlässlicher Partner für die professionelle Betreuung 
          Ihrer Immobilie – mit Erfahrung, Qualität und persönlichem Service.
        </motion.p>

        <div className="features-grid">
          <motion.div className="feature-item" variants={fadeInUp}>
            <div className="feature-icon">✓</div>
            <h3>Zuverlässig</h3>
            <p>
              Pünktlich, verlässlich und immer erreichbar – 
              auf uns können Sie sich verlassen.
            </p>
          </motion.div>

          <motion.div className="feature-item" variants={fadeInUp}>
            <div className="feature-icon">★</div>
            <h3>Erfahren</h3>
            <p>
              Jahrelange Erfahrung in der Betreuung von Wohn- und 
              Gewerbeimmobilien aller Art.
            </p>
          </motion.div>

          <motion.div className="feature-item" variants={fadeInUp}>
            <div className="feature-icon">⚡</div>
            <h3>Schnell</h3>
            <p>
              Kurze Reaktionszeiten und flexible Terminvereinbarungen 
              für dringende Anliegen.
            </p>
          </motion.div>

          <motion.div className="feature-item" variants={fadeInUp}>
            <div className="feature-icon">€</div>
            <h3>Fair</h3>
            <p>
              Transparente Preise ohne versteckte Kosten – 
              faire Konditionen für erstklassige Leistung.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Bereit für professionelle Betreuung?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. 
          Wir beraten Sie gerne!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/kontakt" className="btn primary">
            Jetzt Kontakt aufnehmen
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}