import "./Publicacion.css";

import EncabezadoPublicacion from "../EncabezadoPublicacion";
import AccionesPublicacion from "../AccionesPublicacion";
import InfoPublicacion from "../InfoPublicacion";

function Publicacion({
  publicacion,
  seleccionarPublicacion,
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
          seleccionarPublicacion(publicacion)
        }
      />

      <AccionesPublicacion
        likesIniciales={publicacion.likes}
      />

      <InfoPublicacion
        publicacion={publicacion}
      />
    </article>
  );
}

export default Publicacion;