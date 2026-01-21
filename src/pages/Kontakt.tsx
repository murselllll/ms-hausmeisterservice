import { motion } from "framer-motion";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // E-Mail-Link mit vorausgefüllten Daten
    const subject = encodeURIComponent(`Anfrage von ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Nachricht:\n${formData.message}`
    );
    
    window.location.href = `mailto:kontakt@msgebaeudeservice.com?subject=${subject}&body=${body}`;
    
    alert(`Vielen Dank für Ihre Nachricht, ${formData.name}! Ihr E-Mail-Programm wird geöffnet.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          Kontaktieren Sie uns
        </motion.h1>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Wir sind für Sie da! Kontaktieren Sie uns für ein unverbindliches 
          Angebot oder bei Fragen zu unseren Leistungen.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1100px',
          margin: '3rem auto 0'
        }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              padding: '3rem 2.5rem',
              borderRadius: '16px',
              color: 'white',
              height: '100%'
            }}>
              <h2 style={{ 
                fontSize: '2rem',
                marginBottom: '2rem',
                color: 'white'
              }}>
                Kontaktinformationen
              </h2>

              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                <div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.7rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Servicegebiet</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95,
                    lineHeight: '1.6'
                  }}>
                    MS Gebäudeservice<br />
                    Im Umkreis von 50 km um Kupferzell<br />
                    Baden-Württemberg
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.7rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📞</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Telefon</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}>
                    <a 
                      href="tel:+4915161598654" 
                      style={{ 
                        color: 'white',
                        textDecoration: 'none',
                        borderBottom: '2px solid rgba(255,255,255,0.5)',
                        paddingBottom: '2px'
                      }}
                    >
                      +49 151 61598654
                    </a>
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.7rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>✉️</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>E-Mail</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95
                  }}>
                    <a 
                      href="mailto:kontakt@msgebaeudeservice.com" 
                      style={{ 
                        color: 'white',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      kontakt@msgebaeudeservice.com
                    </a>
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.7rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>📷</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Instagram</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95
                  }}>
                    <a 
                      href="https://www.instagram.com/ms_gebaudeservice/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: 'white',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.5)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      @ms_gebaudeservice
                      <span style={{ fontSize: '0.9rem' }}>↗</span>
                    </a>
                  </p>
                </div>

                <div>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.7rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>🕐</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Erreichbarkeit</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95,
                    lineHeight: '1.8'
                  }}>
                    Montag - Freitag: 7:00 - 18:00 Uhr<br />
                    Samstag: 8:00 - 14:00 Uhr<br />
                    Notdienst: Nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ihr Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Max Mustermann"
                  aria-label="Ihr Name"
                  style={{ color: '#000000' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Ihre E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="max@beispiel.de"
                  aria-label="Ihre E-Mail"
                  style={{ color: '#000000' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Ihre Telefonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 123 456 7890"
                  aria-label="Ihre Telefonnummer"
                  style={{ color: '#000000' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  aria-label="Ihre Nachricht"
                  style={{ color: '#000000' }}
                />
              </div>

              <button type="submit">
                Nachricht senden
              </button>

              <p style={{ 
                fontSize: '0.9rem',
                color: 'var(--text-gray)',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                * Pflichtfelder
              </p>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Section mit 50km Servicegebiet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '4rem',
            maxWidth: '1100px',
            margin: '4rem auto 0'
          }}
        >
          <h2 style={{ 
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-dark)',
            textAlign: 'center'
          }}>
            Unser Servicegebiet
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(249, 115, 22, 0.1))',
            padding: '2rem',
            borderRadius: '16px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '1.2rem',
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              🎯 50 km Radius um Kupferzell
            </p>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-gray)',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Wir betreuen Ihre Immobilien professionell im gesamten Umkreis von 50 km 
              um Kupferzell. Das umfasst unter anderem die Regionen Heilbronn, Schwäbisch Hall, 
              Crailsheim, Öhringen und viele weitere Orte in der Hohenlohe-Region.
            </p>
          </div>
          <div className="map-container" style={{ position: 'relative' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81328.49419035!2d9.660!3d49.258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bfe3d7c8e8b9%3A0x41f6bb7a5df3e30!2s74635%20Kupferzell!5e0!3m2!1sde!2sde!4v1234567890!5m2!1sde!2sde&z=10"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Servicegebiet 50km um Kupferzell"
            />
            {/* Overlay-Hinweis für den 50km Radius */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(37, 99, 235, 0.95)',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 10,
              pointerEvents: 'none'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              50 km Serviceradius um Kupferzell
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            padding: '0 1rem'
          }}>
            {[
              'Heilbronn', 'Schwäbisch Hall', 'Crailsheim', 'Öhringen', 
              'Bad Mergentheim', 'Künzelsau', 'Niedernhall', 'Neckarsulm'
            ].map((city, index) => (
              <div key={index} style={{
                background: 'var(--bg-light)',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
                fontSize: '0.95rem',
                color: 'var(--text-dark)',
                fontWeight: 500
              }}>
                ✓ {city}
              </div>
            ))}
          </div>
          <p style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.95rem',
            color: 'var(--text-gray)',
            fontStyle: 'italic'
          }}>
            Ihr Ort ist nicht dabei? Kontaktieren Sie uns – wir prüfen gerne, 
            ob Ihr Standort in unserem Servicegebiet liegt!
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            background: 'var(--bg-light)',
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '4rem auto 0'
          }}
        >
          <h3 style={{ 
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--text-dark)'
          }}>
            Schnelle Rückmeldung garantiert
          </h3>
          <p style={{ 
            fontSize: '1.05rem',
            color: 'var(--text-gray)',
            lineHeight: '1.7'
          }}>
            Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. 
            Bei dringenden Anliegen erreichen Sie uns jederzeit unter <strong>+49 151 61598654</strong>.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}