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
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <img
          src={publicacion.imagen}
          alt="post"
          className="modal-imagen"
        />

        <div className="modal-info">

          <div className="modal-header">

            <div className="modal-usuario">

              <div className="foto-perfil"></div>

              <h3>
                {publicacion.usuario}
              </h3>

            </div>

          </div>

          <div className="modal-descripcion">

            <p>
              <span>
                {publicacion.usuario}
              </span>{" "}
              {publicacion.descripcion}
            </p>

          </div>

          <div className="modal-comentarios">

            <p>
              <strong>catlover:</strong>
              Hermoso 😻
            </p>

            <p>
              <strong>michiworld:</strong>
              Necesito abrazarlo YA
            </p>

            <p>
              <strong>catsdaily:</strong>
              El gato más lindo 🐱
            </p>

          </div>

          <div className="modal-footer">

            <div className="acciones">
              ❤️ 💬 📤
            </div>

            <p className="likes-modal">
              {publicacion.likes} likes
            </p>

            <p className="fecha">
              Hace 2 horas
            </p>

            <button
              onClick={cerrarModal}
            >
              Cerrar
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalPublicacion;