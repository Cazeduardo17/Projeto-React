import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Lista de Tarefas Acadêmicas</h1>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;