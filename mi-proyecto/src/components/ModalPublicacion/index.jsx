import "./ModalPublicacion.css";

function ModalPublicacion({
  publicacion,
  cerrarModal,
}) {
  if (!publicacion) return null;

  return (
    <div
      className="modal-overlay"
      onClick={cerrarModal}
    >
      <div
        className="modal-contenido"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={publicacion.imagen}
          alt="post"
        />

        <div className="modal-info">
          <h2>{publicacion.usuario}</h2>

          <p>{publicacion.descripcion}</p>

          <p>
            ❤️ {publicacion.likes} likes
          </p>

          <div className="comentarios">
            <p>
              <strong>cat_fan:</strong>
              Hermoso 😻
            </p>

            <p>
              <strong>michi_world:</strong>
              Necesito abrazarlo
            </p>
          </div>

          <button onClick={cerrarModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;