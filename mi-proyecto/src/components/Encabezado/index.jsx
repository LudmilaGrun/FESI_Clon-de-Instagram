import "./Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Instagram</h1>

      <input
        type="text"
        placeholder="Search"
      />

      <div className="acciones-header">
        <span>🏠</span>

        <span>✉️</span>

        <span>❤️</span>

        <button>
          + New Post
        </button>
      </div>
    </header>
  );
}

export default Encabezado;