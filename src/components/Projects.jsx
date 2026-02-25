const projects = [
  {
    title: "BookNotes",
    description: "Aplicação full-stack para organizar livros, notas e avaliações em um único fluxo.",
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "https://book-notes-vvs0.onrender.com",
    repo: "https://github.com/tamicoding/book-notes"
  },
  {
    title: "Simon Game",
    description: "Jogo de memória interativo feito em React com progressão por níveis e feedback visual em tempo real.",
    tech: ["React", "JavaScript"],
    live: "https://simon-game-react-nine.vercel.app/",
    repo: "https://github.com/tamicoding/simon-game-react"
  },
  {
    title: "Star Wars Universe",
    description: "Projeto frontend temático que centraliza conteúdos do universo Star Wars com navegação intuitiva.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamicoding.github.io/starwars-universe/",
    repo: "https://github.com/tamicoding/starwars-universe"
  },
{
    title: "Sábios do Multiverso",
    description: "Site de frases famosas traduzidas, com consumo de API para buscar e exibir citações dinamicamente.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sabios-do-multiverso.onrender.com",
    repo: "https://github.com/tamicoding/sabios-do-multiverso"
  }

];

export default function Projects() {
  return (
    <section className="section reveal" id="projetos">
      <div className="container">
        <h2 className="section__title">Projetos em destaque</h2>

        <div className="grid grid--2">
          {projects.map(project => (
            <div className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="card__text">{project.description}</p>

              <div className="card__tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="card__links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">Ver online</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <a
            className="btn"
            href="https://github.com/tamicoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}