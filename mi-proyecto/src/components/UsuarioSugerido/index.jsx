import "./UsuarioSugerido.css";

function UsuarioSugerido({ nombre }) {
  return (
    <div className="usuario-sugerido">
      <div className="usuario-info">
        <img
          src={`https://i.pravatar.cc/150?u=${nombre}`}
          alt=""
        />

        <span>{nombre}</span>
      </div>

      <button>Seguir</button>
    </div>
  );
}

export default UsuarioSugerido;