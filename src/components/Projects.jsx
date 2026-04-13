const projects = [
  {
    title: "BookNotes",
    description: {
      "pt-BR": "Aplicação full-stack para gerenciamento de livros, permitindo adicionar, avaliar e organizar leituras com persistência em banco de dados. Possui sistema CRUD completo, integração com API e interface dinâmica construída com React.",
      "en-US": "Full-stack application for book management, allowing users to add, review, and organize their readings with database persistence. Features a complete CRUD system, API integration, and a dynamic interface built with React."
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "https://book-notes-vvs0.onrender.com",
    repo: "https://github.com/tamicoding/book-notes"
  },
  {
    title: "Simon Game",
    description: {
      "pt-BR": "Jogo de memória interativo desenvolvido com React, com progressão por níveis e feedback visual em tempo real. Possui lógica de validação de jogadas, controle de estado e aumento gradual de dificuldade para melhorar a experiência do usuário.",
      "en-US": "Interactive memory game built with React, featuring level progression and real-time visual feedback. Includes game logic validation, state management, and increasing difficulty to enhance user experience."
    },
    tech: ["React", "JavaScript"],
    live: "https://simon-game-react-nine.vercel.app/",
    repo: "https://github.com/tamicoding/simon-game-react"
  },
  {
    title: "Star Wars Universe",
    description: {
      "pt-BR": "Projeto frontend temático que centraliza conteúdos do universo Star Wars, com navegação intuitiva e interface dinâmica. Consome dados de APIs externas para exibir informações sobre personagens, planetas e filmes, proporcionando uma experiência interativa ao usuário.",
      "en-US": "Themed frontend project that centralizes content from the Star Wars universe, featuring intuitive navigation and a dynamic interface. Consumes data from external APIs to display information about characters, planets, and films, providing an interactive user experience."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tamicoding.github.io/starwars-universe/",
    repo: "https://github.com/tamicoding/starwars-universe"
  },
{
    title: "Sábios do Multiverso",
  titleEn: "Sages of the Multiverse",
    description: {
      "pt-BR": "Site de frases famosas traduzidas, com consumo de API para buscar e exibir citações dinamicamente. Permite explorar diferentes autores e conteúdos em tempo real, com foco em integração de dados externos e renderização dinâmica na interface.",
      "en-US": "Website for translated famous quotes, using API consumption to dynamically fetch and display quotations. Allows users to explore different authors and content in real time, focusing on external data integration and dynamic rendering in the interface."
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