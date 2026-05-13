import "./Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">
      <input
        type="text"
        placeholder="Username, hashtag and story search"
      />

      <div className="acciones-header">
        <span>⚙️</span>

        <span>📷</span>

        <span>✉️</span>

        <button>+ New Post</button>
      </div>
    </header>
  );
}

export default Encabezado;