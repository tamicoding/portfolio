import booksPreview from "../assets/projects/optimized/books.jpg";
import sabiosPreview from "../assets/projects/optimized/sabios.jpg";
import simonPreview from "../assets/projects/optimized/simon.jpg";
import swPreview from "../assets/projects/optimized/sw.jpg";

const projects = [
  {
    title: "BookNotes",
    image: booksPreview,
    imageAlt: "Preview do projeto BookNotes",
    description: {
      "pt-BR": "Aplicação full stack para gerenciar leituras. Implementei CRUD completo, persistência em PostgreSQL, integração com API externa e interface em React para cadastrar, editar e acompanhar livros.",
      "en-US": "Full-stack app for managing reading progress. I implemented full CRUD, PostgreSQL persistence, external API integration, and a React interface to create, edit, and track books."
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "https://book-notes-vvs0.onrender.com",
    liveNote: {
      "pt-BR": "Hospedado no Render: o primeiro carregamento pode demorar alguns segundos.",
      "en-US": "Hosted on Render: the first load may take a few seconds."
    },
    video: "https://youtu.be/MuBE76vhMYA",
    repo: "https://github.com/tamicoding/book-notes"
  },
  {
    title: "Simon Game",
    image: simonPreview,
    imageAlt: "Preview do projeto Simon Game",
    description: {
      "pt-BR": "Jogo de memória em React com foco em lógica e estado. Implementei validação de sequência, progressão por níveis, feedback visual em tempo real e aumento gradual de dificuldade.",
      "en-US": "React memory game focused on logic and state management. I implemented sequence validation, level progression, real-time visual feedback, and gradual difficulty scaling."
    },
    tech: ["React", "JavaScript"],
    live: "https://simon-game-react-nine.vercel.app/",
    repo: "https://github.com/tamicoding/simon-game-react"
  },
  {
    title: "Star Wars Universe",
    image: swPreview,
    imageAlt: "Preview do projeto Star Wars Universe",
    description: {
      "pt-BR": "Frontend temático para explorar dados do universo Star Wars. Consumi APIs externas, organizei informações de personagens, planetas e filmes e criei uma navegação visual e interativa.",
      "en-US": "Themed frontend for exploring Star Wars universe data. I consumed external APIs, organized character, planet, and film information, and built a visual, interactive navigation flow."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamicoding.github.io/starwars-universe/",
    repo: "https://github.com/tamicoding/starwars-universe"
  },
  {
    title: "Sábios do Multiverso",
    titleEn: "Sages of the Multiverse",
    image: sabiosPreview,
    imageAlt: "Preview do projeto Sábios do Multiverso",
    description: {
      "pt-BR": "Aplicação para exibir citações traduzidas de forma dinâmica. Integrei API para buscar frases em tempo real, organizei autores e renderizei o conteúdo com atualização direta na interface.",
      "en-US": "Application for displaying translated quotes dynamically. I integrated an API to fetch quotes in real time, organized authors, and rendered updated content directly in the interface."
    },
    tech: ["React", "JavaScript"],
    live: "https://sabios-do-multiverso.vercel.app/",
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
              <img
                className="card__preview"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
              <h3>{isEnglish && project.titleEn ? project.titleEn : project.title}</h3>
              <p className="card__text">{project.description[language]}</p>

              <div className="card__tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="card__links">
                <a
                  className="card__link card__link--primary"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isEnglish ? "Live Demo" : "Ver online"}
                </a>
                {project.video && (
                  <a
                    className="card__link"
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isEnglish ? "Demo Video" : "Vídeo demo"}
                  </a>
                )}
                <a
                  className="card__link"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isEnglish ? "Repository" : "Repositório"}
                </a>
              </div>
              {project.liveNote && (
                <p className="card__note">{project.liveNote[language]}</p>
              )}
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
