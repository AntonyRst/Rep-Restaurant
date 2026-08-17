import { Link } from "react-router";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/galeria">Galería</Link>
          </li>
          <li>
            <Link to="/menu">Menú</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/promociones">Promociones</Link>
          </li>
          <li>
            <Link to="/reservaciones">Reservaciones y Horarios</Link>
          </li>
          <li>
            <Link to="/testimonios">Testimonios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
