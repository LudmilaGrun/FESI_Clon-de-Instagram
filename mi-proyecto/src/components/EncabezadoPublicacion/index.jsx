import "./EncabezadoPublicacion.css";

function EncabezadoPublicacion({ usuario }) {
  return (
    <div className="encabezado-publicacion">
      <div className="usuario-publicacion">
        <img
          src={`https://i.pravatar.cc/150?u=${usuario}`}
          alt=""
        />

        <span>{usuario}</span>
      </div>

      <span>•••</span>
    </div>
  );
}

export default EncabezadoPublicacion;