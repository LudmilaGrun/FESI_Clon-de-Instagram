import "./InfoPublicacion.css";

function InfoPublicacion({ publicacion }) {
  return (
    <div className="info-publicacion">
      <p>
        <strong>{publicacion.usuario}</strong>{" "}
        {publicacion.descripcion}
      </p>

      <span className="comentarios">
        Ver los comentarios
      </span>
    </div>
  );
}

export default InfoPublicacion;