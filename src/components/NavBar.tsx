import { Link } from "react-router";

function NavBar() {
  return (
    <header className="w-full bg-[#243b53] shadow-lg shadow-[#020617]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div><Link to="/" className="text-xl font-bold tracking-wide text-[#f4f4f5]">Restaurant</Link></div>

        <ul className="flex items-center gap-6 text-sm font-bold">
          <li><Link to="/" className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Inicio</Link></li>
          <li><Link to="/nosotros" className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Nosotros</Link></li>
          <li><Link to="/menu"  className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Menú</Link></li>
          <li><Link to="/promociones"  className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Promociones</Link></li>
          <li><Link to="/galeria"  className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Galería</Link></li>
          <li><Link to="/testimonios"  className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Testimonios</Link></li>
          <li><Link to="/contacto"  className="text-[#f4f4f5] hover:text-[#7b96ae] transition-colors">Contacto</Link></li>

          <li>
            <Link to="/reservaciones" className="px-4 py-2 inline-block bg-[#1e293b] text-[#f4f4f5] transform transition delay-150 duration-300 ease-in-out hover:text-[#7b96ae] hover:-translate-y-1 hover:scale-100 hover:bg-[#f0f4f8]">
              Reservar Mesa
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default NavBar;
