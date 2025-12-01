import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion"; // <- type-only import
import PageWrapper from "../components/PageWrapper";


export default function Leistungen() {
  const services = [
    {
      title: "Hausmeisterservice",
      description: "Umfassende Betreuung Ihrer Immobilie",
      image: "/placeholder-service1.jpg",
      fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      details: [
        "Regelmäßige Objektkontrollen",
        "Reinigung von Treppenhäusern und Gemeinschaftsflächen",
        "Kleine Reparaturen und Instandhaltung",
        "Mülltonnen-Management",
        "Kontrolle der Haustechnik",
        "Winterdienst und Schneeräumung"
      ]
    },
    {
      title: "Grün- & Außenanlagen",
      description: "Professionelle Gartenpflege das ganze Jahr",
      image: "/placeholder-service2.jpg",
      fallback: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      details: [
        "Rasenmähen und Rasenpflege",
        "Heckenschnitt und Formschnitt",
        "Unkrautentfernung",
        "Laubbeseitigung im Herbst",
        "Pflanzenpflege und -schnitt",
        "Wegepflege und Reinigung"
      ]
    },
    {
      title: "Montagearbeiten",
      description: "Schnelle und fachgerechte Montage",
      image: "/placeholder-service3.jpg",
      fallback: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      details: [
        "Möbelmontage aller Art",
        "Aufbau von Regalsystemen",
        "Küchenmontage",
        "Installation von Lampen und Leuchten",
        "Demontage und Entsorgung",
        "Kleinere Reparaturen"
      ]
    },
    {
      title: "Wartung & Instandhaltung",
      description: "Vorbeugende Pflege für langfristige Werterhaltung",
      image: "/placeholder-service4.jpg",
      fallback: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80",
      details: [
        "Regelmäßige Anlagenkontrollen",
        "Austausch defekter Komponenten",
        "Funktionsprüfungen",
        "Vorbeugende Wartungsarbeiten",
        "Dokumentation aller Maßnahmen",
        "24/7 Notfall-Rufbereitschaft"
      ]
    },
    {
      title: "Winterdienst",
      description: "Sichere Wege auch bei Schnee und Eis",
      image: "/placeholder-service1.jpg",
      fallback: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800&q=80",
      details: [
        "Schneeräumung von Gehwegen und Zufahrten",
        "Streudienst bei Glatteis",
        "Räumung von Parkplätzen",
        "Dachrinnenreinigung",
        "Eiszapfenentfernung",
        "Dokumentation der Räumzeiten"
      ]
    },
    {
      title: "Reinigungsservice",
      description: "Sauberkeit für Ihr Objekt",
      image: "/placeholder-service2.jpg",
      fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      details: [
        "Treppenhausreinigung",
        "Fensterreinigung",
        "Reinigung von Gemeinschaftsräumen",
        "Entrümpelung von Kellern und Dachböden",
        "Grundreinigung nach Auszug",
        "Regelmäßige Unterhaltsreinigung"
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <PageWrapper>
      <section className="section">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unsere Leistungen
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professioneller Hausmeisterservice für alle Bereiche – individuell auf Ihre Bedürfnisse zugeschnitten.
        </motion.p>

        <motion.div
          className="service-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card" variants={itemVariants}>
              <img
                src={service.image}
                alt={service.title}
                onError={(e) => {
                  e.currentTarget.src = service.fallback;
                }}
                loading="lazy"
              />
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {service.details.map((detail, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'var(--text-gray)', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'var(--bg-light)',
            borderRadius: '16px'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            Individuelle Leistungspakete
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-gray)',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Sie benötigen eine individuelle Kombination unserer Services? Kein Problem! Wir erstellen Ihnen gerne ein maßgeschneidertes Angebot.
          </p>
          <a href="/kontakt" className="btn primary">
            Jetzt anfragen
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
