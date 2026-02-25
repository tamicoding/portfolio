export default function Navbar({ language, onChangeLanguage, theme, onToggleTheme }) {
  const isLightTheme = theme === "light";
  const isEnglish = language === "en-US";

  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__left">
          <button
            type="button"
            className={`lang-toggle ${!isEnglish ? "is-active" : ""}`}
            onClick={() => onChangeLanguage("pt-BR")}
            aria-label="Alterar idioma para português do Brasil"
          >
            <span className="lang-flag" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <rect width="24" height="24" rx="12" fill="#009c3b" />
                <polygon points="12,4.5 20,12 12,19.5 4,12" fill="#ffdf00" />
                <circle cx="12" cy="12" r="4" fill="#002776" />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className={`lang-toggle ${isEnglish ? "is-active" : ""}`}
            onClick={() => onChangeLanguage("en-US")}
            aria-label="Switch language to English"
          >
            <span className="lang-flag" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <rect width="24" height="24" rx="12" fill="#fff" />
                <rect x="0" y="2" width="24" height="2" fill="#b22234" />
                <rect x="0" y="6" width="24" height="2" fill="#b22234" />
                <rect x="0" y="10" width="24" height="2" fill="#b22234" />
                <rect x="0" y="14" width="24" height="2" fill="#b22234" />
                <rect x="0" y="18" width="24" height="2" fill="#b22234" />
                <rect x="0" y="0" width="11" height="11" fill="#3c3b6e" />
                <circle cx="2.5" cy="2.5" r="0.6" fill="#fff" />
                <circle cx="5" cy="4" r="0.6" fill="#fff" />
                <circle cx="7.5" cy="2.5" r="0.6" fill="#fff" />
                <circle cx="3.8" cy="6.5" r="0.6" fill="#fff" />
                <circle cx="6.3" cy="8" r="0.6" fill="#fff" />
              </svg>
            </span>
          </button>
        </div>

        <a className="nav__brand" href="#topo">Tamiris • {isEnglish ? "Portfolio" : "Portfólio"}</a>

        <nav className="nav__links">
          <a href="#projetos">{isEnglish ? "Projects" : "Projetos"}</a>
          <a href="#skills">Skills</a>
          <a href="#contato">{isEnglish ? "Contact" : "Contato"}</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={
              isEnglish
                ? (isLightTheme ? "Enable dark theme" : "Enable light theme")
                : (isLightTheme ? "Ativar tema escuro" : "Ativar tema claro")
            }
            title={
              isEnglish
                ? (isLightTheme ? "Light theme" : "Dark theme")
                : (isLightTheme ? "Tema claro" : "Tema escuro")
            }
          >
            <span aria-hidden="true">{isLightTheme ? "☀️" : "🌙"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}