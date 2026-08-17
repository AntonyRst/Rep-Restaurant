import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Galeria from "./pages/Galeria";
import Menu from "./pages/Menu";
import Nosotros from "./pages/Nosotros";
import Promociones from "./pages/Promociones";
import ReservacionesHorarios from "./pages/ReservacionesHorarios";
import Testimonios from "./pages/Testimonios";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/reservaciones" element={<ReservacionesHorarios />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </>
  );
}

export default App;
