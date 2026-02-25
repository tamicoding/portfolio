const projects = [
  {
    title: "BookNotes",
    description: {
      "pt-BR": "Aplicação full-stack para organizar livros, notas e avaliações em um único fluxo.",
      "en-US": "Full-stack application to organize books, notes, and ratings in one seamless flow."
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "https://book-notes-vvs0.onrender.com",
    repo: "https://github.com/tamicoding/book-notes"
  },
  {
    title: "Simon Game",
    description: {
      "pt-BR": "Jogo de memória interativo feito em React com progressão por níveis e feedback visual em tempo real.",
      "en-US": "Interactive memory game built with React, featuring level progression and real-time visual feedback."
    },
    tech: ["React", "JavaScript"],
    live: "https://simon-game-react-nine.vercel.app/",
    repo: "https://github.com/tamicoding/simon-game-react"
  },
  {
    title: "Star Wars Universe",
    description: {
      "pt-BR": "Projeto frontend temático que centraliza conteúdos do universo Star Wars com navegação intuitiva.",
      "en-US": "Themed frontend project that centralizes Star Wars universe content with intuitive navigation."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamicoding.github.io/starwars-universe/",
    repo: "https://github.com/tamicoding/starwars-universe"
  },
{
    title: "Sábios do Multiverso",
  titleEn: "Sages of the Multiverse",
    description: {
      "pt-BR": "Site de frases famosas traduzidas, com consumo de API para buscar e exibir citações dinamicamente.",
      "en-US": "Website of translated famous quotes using an API to fetch and display citations dynamically."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sabios-do-multiverso.onrender.com",
    repo: "https://github.com/tamicoding/sabios-do-multiverso"
  }

];

export default function Projects({ language }) {
  const isEnglish = language === "en-US";

  return (
    <section className="section reveal" id="projetos">
      <div className="container">
        <h2 className="section__title">{isEnglish ? "Featured Projects" : "Projetos em destaque"}</h2>

        <div className="grid grid--2">
          {projects.map(project => (
            <div className="card" key={project.title}>
              <h3>{isEnglish && project.titleEn ? project.titleEn : project.title}</h3>
              <p className="card__text">{project.description[language]}</p>

              <div className="card__tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="card__links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">{isEnglish ? "Live Demo" : "Ver online"}</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">{isEnglish ? "Repository" : "Repositório"}</a>
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
            {isEnglish ? "See more on GitHub →" : "Ver mais no GitHub →"}
          </a>
        </div>
      </div>
    </section>
  );
}