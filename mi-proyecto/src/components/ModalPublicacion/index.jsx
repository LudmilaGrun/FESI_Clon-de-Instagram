import "./ModalPublicacion.css";

function ModalPublicacion({
  publicacion,
  cerrarModal,
}) {
  return (
    <div
      className="modal-fondo"
      onClick={cerrarModal}
    >
      <div
        className="modal-contenido"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={publicacion.imagen}
          alt="gato"
        />

        <div className="info-modal">
          <h2>{publicacion.usuario}</h2>

          <p>{publicacion.descripcion}</p>

          <span className="likes-modal">
            {publicacion.likes} likes
          </span>

          <p className="comentarios-modal">
            Meow meow 😺 <br />
            So cute ✨ <br />
            Amazing cat 🐱
          </p>

          <button
            className="boton-cerrar"
            onClick={cerrarModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;