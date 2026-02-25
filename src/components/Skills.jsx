const skills = {
  Frontend: [
    "React.js",
    "JavaScript",
    "ES6+",
    "DOM Manipulation",
    "Async JavaScript (Promises / async-await)",
    "Fetch API / Axios",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "jQuery",
    "Form Handling & Validation",
    "Responsive Design"
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "API REST / RESTful",
    "HTTP Methods",
    "Routing",
    "Express Middleware",
    "Authentication (Sessions / Cookies)",
    "Environment Variables (.env)",
    "JSON",
    "CRUD",
    "SQL",
    "PostgreSQL",
    "EJS"
  ],
  Ferramentas: ["Git/GitHub", "NPM / Yarn", "Vite", "Figma (básico)"],
  Tools: ["Git/GitHub", "NPM / Yarn", "Vite", "Figma (basic)"],
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
    <section className="section section--alt reveal" id="skills">
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