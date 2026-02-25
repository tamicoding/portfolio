import logo from "../assets/logo.png"; 

export default function Hero() {
  return (
    <section className="hero reveal" id="topo">
      <div className="container hero__inner">
        <div className="hero__left">
          <img className="hero__avatar" src={logo} alt="Tamiris" />
        </div>

        <div className="hero__right">
          <h1>Tamiris Reis</h1>
          <p className="hero__subtitle">Desenvolvedora Web (React • Node)</p>

          <p className="hero__text">
            Desenvolvedora Full Stack com foco em React, Node.js e PostgreSQL. Construo
            interfaces modernas, integrações com API e projetos completos em produção.
          </p>

          <p className="hero__availability">Disponível para oportunidades em Desenvolvimento Web</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="https://www.linkedin.com/in/tamirisfreis/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href="https://github.com/tamicoding" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
}