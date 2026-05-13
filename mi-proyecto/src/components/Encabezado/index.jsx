import "./Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Instagram</h1>

      <input type="text" placeholder="Buscar..." />

      <div className="iconos">
        <span>🏠</span>
        <span>✈️</span>
        <span>❤️</span>
        <span>➕</span>
      </div>
    </header>
  );
}

export default Encabezado;