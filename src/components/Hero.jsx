import logo from "../assets/logo.webp";

export default function Hero({ language }) {
  const isEnglish = language === "en-US";

  return (
    <section className="hero reveal" id="topo">
      <div className="container hero__inner">
        <div className="hero__left">
          <img
            className="hero__avatar"
            src={logo}
            alt="Foto de perfil de Tamiris Reis"
            width="100"
            height="100"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="hero__right">
          <h1>Tamiris Reis</h1>
          <p className="hero__subtitle">
            {isEnglish ? "Full Stack Web Developer" : "Desenvolvedora Web Full Stack"}
          </p>

          <p className="hero__text">
            {isEnglish
              ? "I build web applications with React, Node.js, and PostgreSQL, combining interface, logic, and data integration in practical projects. I focus on user experience, responsiveness, and well-structured solutions."
              : "Crio aplicações web com React, Node.js e PostgreSQL, unindo interface, lógica e integração de dados em projetos práticos. Tenho foco em experiência do usuário, responsividade e soluções bem estruturadas."}
          </p>

          <p className="hero__availability">
            {isEnglish
              ? "Available for web development opportunities"
              : "Disponível para oportunidades em desenvolvimento web"}
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              {isEnglish ? "Let's talk" : "Vamos conversar"}
            </a>
            <a className="btn" href="/cv.pdf" target="_blank" rel="noopener noreferrer">{isEnglish ? "Resume (PDF)" : "CV (PDF)"}</a>
            <a className="btn" href="https://github.com/tamicoding" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/tamirisfreis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
