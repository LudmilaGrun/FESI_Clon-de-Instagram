import "./BarraLateral.css";
import TarjetaPerfil from "../TarjetaPerfil";

function BarraLateral() {
  return (
    <aside className="barra-lateral">
      <TarjetaPerfil />

      <nav className="menu">
        <button>🏠 Inicio</button>
        <button>🔍 Explorar</button>
        <button>❤️ Notificaciones</button>
        <button>⚙️ Configuración</button>
      </nav>
    </aside>
  );
}

export default BarraLateral;