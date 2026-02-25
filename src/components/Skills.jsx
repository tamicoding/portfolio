const skills = {
  Frontend: ["React", "JavaScript", "HTML", "CSS", "Responsividade"],
  Backend: ["Node.js", "APIs REST", "PostgreSQL"],
  Ferramentas: ["Git/GitHub", "Vite", "Figma (básico)"],
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