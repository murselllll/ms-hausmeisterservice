import PageWrapper from "../components/PageWrapper";

export default function Kontakt() {
  return (
    <PageWrapper>
      <h1>Kontakt</h1>

      <form className="contact-form">
        <input type="text" placeholder="Ihr Name" required />
        <input type="email" placeholder="Ihre E-Mail" required />
        <textarea placeholder="Ihre Nachricht" required></textarea>
        <button type="submit">Senden</button>
      </form>
    </PageWrapper>
  );
}
