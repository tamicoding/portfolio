const skills = {
  Frontend: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "API Integration"
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "PostgreSQL",
    "Authentication",
    "CRUD Applications"
  ],
  Ferramentas: ["Git & GitHub", "npm", "Vite", "Figma"],
  Tools: ["Git & GitHub", "npm", "Vite", "Figma"],
};

export default function Skills({ language }) {
  const isEnglish = language === "en-US";
  const categories = isEnglish
    ? {
      Frontend: skills.Frontend,
      Backend: skills.Backend,
      Tools: skills.Tools,
    }
    : {
      Frontend: skills.Frontend,
      Backend: skills.Backend,
      Ferramentas: skills.Ferramentas,
    };

  return (
    <section className="section section--alt section--skills reveal" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>

        <div className="grid grid--2">
          {Object.entries(categories).map(([category, items]) => (
            <div className="card" key={category}>
              <h3 className="card__title">{category}</h3>

              <div className="pill-list">
                {items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
