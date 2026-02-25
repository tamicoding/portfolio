export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#topo">Tamiris • Portfólio</a>

        <nav className="nav__links">
          <a href="#projetos">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}