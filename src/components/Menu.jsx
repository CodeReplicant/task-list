import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Listaapp">Aplicacion de tareas</Link>
        </li>
      </ul>
    </nav>
  );
}