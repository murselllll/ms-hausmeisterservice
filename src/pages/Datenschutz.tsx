import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Datenschutz() {
  return (
    <PageWrapper>
      <section className="section">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Datenschutzerklärung
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
            1. Datenschutz auf einen Blick
          </h2>
          
          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Allgemeine Hinweise
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
            Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
            Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Datenerfassung auf dieser Website
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </p>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
            Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser 
            Datenschutzerklärung entnehmen.
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Wie erfassen wir Ihre Daten?
          </p>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
            es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten 
            werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
            Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            2. Hosting
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Externes Hosting
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
            erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann 
            es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine 
            Website generiert werden, handeln.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Datenschutz
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
            sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Hinweis zur verantwortlichen Stelle
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1rem'
          }}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            MS Gebäudeservice<br />
            Servicegebiet: 50 km um Kupferzell<br />
            Baden-Württemberg<br /><br />
            Telefon: <a href="tel:+4915161598654" style={{ color: '#2563eb', textDecoration: 'none' }}>+49 151 61598654</a><br />
            E-Mail: <a href="mailto:kontakt@msgebaeudeservice.com" style={{ color: '#2563eb', textDecoration: 'none' }}>kontakt@msgebaeudeservice.com</a>
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
            Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Speicherdauer
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
            wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
            Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder 
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern 
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen 
            Daten haben.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Kontaktformular
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
            wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
            Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns 
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
            (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
          </p>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Anfrage per E-Mail, Telefon oder Telefax
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
            aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
            Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir 
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            5. Soziale Medien
          </h2>

          <h3 style={{ 
            fontSize: '1.2rem',
            color: 'var(--text-dark)',
            marginBottom: '1rem',
            marginTop: '2rem'
          }}>
            Instagram
          </h3>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen 
            werden angeboten durch die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand 
            Canal Harbour, Dublin 2, Irland.
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem'
          }}>
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des 
            Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. 
            Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen 
            darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten 
            Daten sowie deren Nutzung durch Instagram erhalten.
          </p>

          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            marginTop: '2.5rem'
          }}>
            6. Ihre Rechte
          </h2>
          
          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1rem'
          }}>
            Sie haben folgende Rechte:
          </p>

          <ul style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '1.5rem',
            paddingLeft: '1.5rem',
            lineHeight: '1.8'
          }}>
            <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
            <li>Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
            <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
            <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
          </ul>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginBottom: '0'
          }}>
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei 
            Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
          </p>

          <p style={{ 
            fontSize: '1rem',
            color: 'var(--text-gray)',
            marginTop: '1rem'
          }}>
            E-Mail: <a href="mailto:kontakt@msgebaeudeservice.com" style={{ color: '#2563eb', textDecoration: 'none' }}>kontakt@msgebaeudeservice.com</a><br />
            Telefon: <a href="tel:+4915161598654" style={{ color: '#2563eb', textDecoration: 'none' }}>+49 151 61598654</a>
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
            Haben Sie Fragen zum Datenschutz?
          </p>
          <a href="/kontakt" className="btn primary">
            Kontaktieren Sie uns
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}