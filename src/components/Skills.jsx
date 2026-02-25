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
};

export default function Skills() {
  return (
    <section className="section section--alt reveal" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>

        <div className="grid grid--2">
          {Object.entries(skills).map(([category, items]) => (
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