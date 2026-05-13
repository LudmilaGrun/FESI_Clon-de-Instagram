import "./BarraLateral.css";

import TarjetaPerfil from "../TarjetaPerfil";

function BarraLateral() {
  return (
    <aside className="barra-lateral">
      <TarjetaPerfil />

      <nav className="menu">
        <button className="activo">
          🏠 Home
        </button>

        <button>
          🔍 Explore
        </button>

        <button>
          🎬 Reels
        </button>

        <button>
          📺 IGTV
        </button>

        <button>
          🔔 Notification
        </button>
      </nav>
    </aside>
  );
}

export default BarraLateral;