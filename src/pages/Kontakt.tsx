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
    alert(`Vielen Dank für Ihre Nachricht, ${formData.name}! Wir melden uns zeitnah bei Ihnen.`);
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
              background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-dark))',
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
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Adresse</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95,
                    lineHeight: '1.6'
                  }}>
                    MS Hausmeisterservice<br />
                    Musterstraße 123<br />
                    72764 Reutlingen
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
                    opacity: 0.95
                  }}>
                    <a 
                      href="tel:+4971234567890" 
                      style={{ 
                        color: 'white',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      +49 (0) 7123 456 7890
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
                      href="mailto:info@ms-hausmeisterservice.de" 
                      style={{ 
                        color: 'white',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.5)'
                      }}
                    >
                      info@ms-hausmeisterservice.de
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
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Öffnungszeiten</h3>
                  </div>
                  <p style={{ 
                    marginLeft: '2.5rem',
                    opacity: 0.95,
                    lineHeight: '1.8'
                  }}>
                    Montag - Freitag: 8:00 - 18:00 Uhr<br />
                    Samstag: 9:00 - 14:00 Uhr<br />
                    Notdienst: 24/7 erreichbar
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
            Bei dringenden Anliegen erreichen Sie uns jederzeit telefonisch.
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}