import "./Encabezado.css";

function Encabezado({
  busqueda,
  setBusqueda,
}) {
  return (
    <header className="encabezado">

      <input
        type="text"
        placeholder="Buscar usuario"
        className="buscador"
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
      />

      <div className="usuario-header">

        <img
          src="https://i.pravatar.cc/100?img=32"
          alt="perfil"
        />

        <span>ludmi.cats</span>

      </div>

    </header>
  );
}

export default Encabezado;