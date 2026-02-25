export default function Contact({ language }) {
  const isEnglish = language === "en-US";

  return (
    <section className="section reveal" id="contato">
      <div className="container contact">
        <h2 className="section__title">{isEnglish ? "Contact" : "Contato"}</h2>

        <p className="contact__text">
          {isEnglish ? "Liked my work? 💬" : "Curtiu meu trabalho? 💬"}
        </p>

        <div className="contact__actions">
          <a className="btn contact__btn" href="mailto:tamirisfr@live.com">
            <span aria-hidden="true">✉️</span>
            {isEnglish ? "Email" : "E-mail"}
          </a>

          <a
            className="btn contact__btn"
            href="https://wa.me/5511966145863"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🟢</span>
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}