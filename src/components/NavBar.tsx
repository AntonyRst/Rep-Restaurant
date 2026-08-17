import { Link } from "react-router";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Inicio</Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
