import "./Sidebar.css";

function Sidebar({ setVistaActual }) {

  return (
    <aside className="sidebar">

      <h2 className="logo">
        Catstagram
      </h2>

      <nav className="menu">

        <div
          className="menu-item"
          onClick={() =>
            setVistaActual("feed")
          }
        >
          🏠 Inicio
        </div>

        <div className="menu-item">
          🔍 Explorar
        </div>

        <div className="menu-item">
          ❤️ Notificaciones
        </div>

        <div className="menu-item">
          ✉️ Mensajes
        </div>

        <div
          className="menu-item"
          onClick={() =>
            setVistaActual("perfil")
          }
        >
          👤 Perfil
        </div>

      </nav>

    </aside>
  );
}

export default Sidebar;