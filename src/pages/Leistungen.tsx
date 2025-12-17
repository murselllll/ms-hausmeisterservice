import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Leistungen() {
  const services = [
    {
      title: "Hausmeisterservice",
      description: "Umfassende Betreuung Ihrer Immobilie",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      longDescription: "In einem gepflegten Objekt fühlt man sich einfacher wohler. Ein zuverlässiger Hausmeisterservice sorgt dafür, dass Ihr Gebäude rundum funktioniert. Wir übernehmen regelmäßige Kontrollgänge, kümmern uns um Kleinreparaturen, pflegen Außenflächen und koordinieren Handwerker. So bleibt Ihr Objekt stets in einem einwandfreien Zustand – sicher, sauber und gepflegt.",
      details: [
        "Regelmäßige Kontrollgänge",
        "Kleinreparaturen",
        "Pflege der Außenflächen",
        "Koordination von Handwerkern",
        "Sicherheit und Sauberkeit gewährleistet"
      ]
    },
    {
      title: "Grün- & Außenanlagen",
      description: "Professionelle Gartenpflege das ganze Jahr",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      longDescription: "Ein gepflegtes Umfeld ist die Visitenkarte Ihres Hauses. Ob Rasen, Hecken oder Beete – wir sorgen dafür, dass Ihre Grünanlagen das ganze Jahr über gepflegt aussehen. Unsere Leistungen reichen vom Mähen und Schneiden über die Unkrautentfernung bis hin zur Laub- und Saisonpflege. Damit Ihre Außenflächen immer einen starken ersten Eindruck machen.",
      details: [
        "Rasenmähen und -pflege",
        "Hecken- und Formschnitt",
        "Unkrautentfernung",
        "Laub- und Saisonpflege",
        "Professioneller erster Eindruck"
      ]
    },
    {
      title: "Montagearbeiten",
      description: "Fachgerechte Montage – sauber, sicher, zuverlässig",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      longDescription: "Fachgerechte Montage – sauber, sicher, zuverlässig. Wir montieren Markisen, Zäune, Geländer und passgenaue Insektenschutzsysteme – präzise und mit einem Auge fürs Detail. Egal ob Neuinstallation oder Austausch bestehender Elemente: Wir sorgen dafür, dass alles sicher sitzt und perfekt aussieht.",
      details: [
        "Montage von Markisen",
        "Installation von Zäunen und Geländern",
        "Passgenaue Insektenschutzsysteme",
        "Neuinstallation und Austausch",
        "Präzise Arbeit mit Liebe zum Detail"
      ]
    },
    {
      title: "Wartung & Instandhaltung",
      description: "Regelmäßige Kontrolle sorgt für dauerhafte Funktion",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      longDescription: "Regelmäßige Kontrolle sorgt für dauerhafte Funktion. Damit alles reibungslos läuft, übernehmen wir Wartungs- und Instandhaltungsarbeiten an Gebäuden und Anlagen. Wir prüfen Haustechnik, führen Kleinreparaturen durch und erkennen frühzeitig Mängel, bevor sie teuer werden. Ihr Objekt bleibt sicher, funktionsfähig und gepflegt.",
      details: [
        "Wartung von Gebäuden und Anlagen",
        "Prüfung der Haustechnik",
        "Kleinreparaturen",
        "Frühzeitige Mängelerkennung",
        "Langfristige Sicherheit und Funktion"
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
        ease: "easeOut"
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
            <motion.div 
              key={index} 
              className="service-card" 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p style={{ 
                  marginBottom: '1.5rem', 
                  fontWeight: 600, 
                  color: '#2563eb',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)'
                }}>
                  {service.description}
                </p>
                <p style={{ 
                  marginBottom: '1.5rem', 
                  lineHeight: '1.8',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  {service.longDescription}
                </p>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.7rem' 
                }}>
                  {service.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '0.7rem', 
                        color: 'var(--text-gray)', 
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' 
                      }}
                    >
                      <span style={{ 
                        color: 'var(--accent-orange)', 
                        fontWeight: 'bold', 
                        flexShrink: 0 
                      }}>
                        ✓
                      </span>
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
            padding: 'clamp(2rem, 4vw, 3rem)',
            background: 'var(--bg-light)',
            borderRadius: '16px'
          }}
        >
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
            marginBottom: '1rem', 
            color: 'var(--text-dark)' 
          }}>
            Individuelle Leistungspakete
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: 'var(--text-gray)',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.7',
            padding: '0 1rem'
          }}>
            Sie benötigen eine individuelle Kombination unserer Services? Kein Problem! 
            Wir erstellen Ihnen gerne ein maßgeschneidertes Angebot für Ihr Objekt 
            im Umkreis von 50 km um Kupferzell.
          </p>
          <a href="/kontakt" className="btn primary">
            Jetzt anfragen
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}