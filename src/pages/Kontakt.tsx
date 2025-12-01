import PageWrapper from "../components/PageWrapper";

export default function Kontakt() {
  return (
    <PageWrapper>
      <h1>Kontakt</h1>

      <form className="contact-form" onSubmit={e => {e.preventDefault(); alert("Danke für Ihre Nachricht!");}}>
        <input type="text" placeholder="Ihr Name" required aria-label="Ihr Name" />
        <input type="email" placeholder="Ihre E-Mail" required aria-label="Ihre E-Mail" />
        <textarea placeholder="Ihre Nachricht" required aria-label="Ihre Nachricht"></textarea>
        <button type="submit">Senden</button>
      </form>
    </PageWrapper>
  );
}
