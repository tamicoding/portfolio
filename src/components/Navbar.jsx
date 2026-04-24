export default function Navbar({ language, onChangeLanguage, theme, onToggleTheme, activeSection }) {
  const isLightTheme = theme === "light";
  const isEnglish = language === "en-US";
  const navItems = [
    { href: "#projetos", id: "projetos", label: isEnglish ? "Projects" : "Projetos" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#contato", id: "contato", label: isEnglish ? "Contact" : "Contato" },
  ];

  return (
    <header className="nav">
      <div className="container nav__inner">
        <div
          className="nav__left"
          role="group"
          aria-label={isEnglish ? "Preferences" : "Preferências"}
        >
          <button
            type="button"
            className={`lang-switch ${isEnglish ? "is-english" : "is-portuguese"}`}
            onClick={() => onChangeLanguage(isEnglish ? "pt-BR" : "en-US")}
            aria-label={
              isEnglish
                ? "Alterar idioma para português do Brasil"
                : "Switch language to English"
            }
            aria-pressed={isEnglish}
            title={isEnglish ? "Português" : "English"}
          >
            <span className="lang-switch__thumb" aria-hidden="true">
              <span className="lang-flag">
                {isEnglish ? (
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <clipPath id="us-flag-clip">
                      <circle cx="12" cy="12" r="12" />
                    </clipPath>
                    <g clipPath="url(#us-flag-clip)">
                      <rect width="24" height="24" fill="#f8fafc" />
                      <rect y="0" width="24" height="2" fill="#b22234" />
                      <rect y="4" width="24" height="2" fill="#b22234" />
                      <rect y="8" width="24" height="2" fill="#b22234" />
                      <rect y="12" width="24" height="2" fill="#b22234" />
                      <rect y="16" width="24" height="2" fill="#b22234" />
                      <rect y="20" width="24" height="2" fill="#b22234" />
                      <rect width="12" height="12" fill="#3c3b6e" />
                      <circle cx="2.4" cy="2.2" r="0.65" fill="#fff" />
                      <circle cx="5.2" cy="2.2" r="0.65" fill="#fff" />
                      <circle cx="8" cy="2.2" r="0.65" fill="#fff" />
                      <circle cx="3.8" cy="5" r="0.65" fill="#fff" />
                      <circle cx="6.6" cy="5" r="0.65" fill="#fff" />
                      <circle cx="9.4" cy="5" r="0.65" fill="#fff" />
                      <circle cx="2.4" cy="7.8" r="0.65" fill="#fff" />
                      <circle cx="5.2" cy="7.8" r="0.65" fill="#fff" />
                      <circle cx="8" cy="7.8" r="0.65" fill="#fff" />
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <clipPath id="br-flag-clip">
                      <circle cx="12" cy="12" r="12" />
                    </clipPath>
                    <g clipPath="url(#br-flag-clip)">
                      <rect width="24" height="24" fill="#009c3b" />
                      <polygon points="12,4.5 20,12 12,19.5 4,12" fill="#ffdf00" />
                      <circle cx="12" cy="12" r="4" fill="#002776" />
                    </g>
                  </svg>
                )}
              </span>
            </span>
          </button>
          <button
            type="button"
            className={`theme-switch ${isLightTheme ? "is-light" : "is-dark"}`}
            onClick={onToggleTheme}
            aria-label={
              isEnglish
                ? (isLightTheme ? "Enable dark theme" : "Enable light theme")
                : (isLightTheme ? "Ativar tema escuro" : "Ativar tema claro")
            }
            title={
              isEnglish
                ? (isLightTheme ? "Switch to dark theme" : "Switch to light theme")
                : (isLightTheme ? "Trocar para tema escuro" : "Trocar para tema claro")
            }
          >
            <span className="theme-switch__thumb" aria-hidden="true">
              {isLightTheme ? "☀️" : "🌙"}
            </span>
          </button>
        </div>

        <a className="nav__brand" href="#topo">Tamiris • {isEnglish ? "Portfolio" : "Portfólio"}</a>

        <nav className="nav__links" aria-label={isEnglish ? "Primary navigation" : "Navegação principal"}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
