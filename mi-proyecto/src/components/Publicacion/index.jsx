import "./Publicacion.css";

import EncabezadoPublicacion from "../EncabezadoPublicacion";
import AccionesPublicacion from "../AccionesPublicacion";
import InfoPublicacion from "../InfoPublicacion";

function Publicacion({
  publicacion,
  seleccionarPublicacion,
  toggleLike,
}) {
  return (
    <article className="publicacion">
      <EncabezadoPublicacion
        usuario={publicacion.usuario}
      />

      <img
        className="imagen-publicacion"
        src={publicacion.imagen}
        alt="gato"
        onClick={() =>
          seleccionarPublicacion(
            publicacion
          )
        }
      />

      <AccionesPublicacion
        likes={publicacion.likes}
        liked={publicacion.liked}
        onLike={() =>
          toggleLike(publicacion.id)
        }
      />

      <InfoPublicacion
        publicacion={publicacion}
      />
    </article>
  );
}

export default Publicacion;