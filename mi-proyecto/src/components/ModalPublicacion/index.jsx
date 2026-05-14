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
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <img
          src={publicacion.imagen}
          alt="gato"
        />

        <div className="info-modal">
          <h2>
            {publicacion.usuario}
          </h2>

          <p>
            {publicacion.descripcion}
          </p>

          <span className="likes-modal">
            {publicacion.likes} likes
          </span>

          <div className="comentarios-modal">
            <div className="comentario">
              <strong>
                milo.cat
              </strong>

              <span>
                this aesthetic is
                EVERYTHING ✨
              </span>
            </div>

            <div className="comentario">
              <strong>
                nala.jpg
              </strong>

              <span>
                obsessed with this
                post 😭
              </span>
            </div>

            <div className="comentario">
              <strong>
                kitty.world
              </strong>

              <span>
                literally the cutest
                vibe ever 🐱
              </span>
            </div>

            <div className="comentario">
              <strong>
                pixel.cat
              </strong>

              <span>
                the colors are so
                pretty omg
              </span>
            </div>
          </div>

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