import "./Publicacion.css";

import { useState } from "react";

function Publicacion({
  usuario,
  imagen,
  likes,
  descripcion,
}) {
  const [tieneLike, setTieneLike] =
    useState(false);

  const [cantidadLikes, setCantidadLikes] =
    useState(likes);

  const manejarLike = () => {
    if (tieneLike) {
      setCantidadLikes(cantidadLikes - 1);
    } else {
      setCantidadLikes(cantidadLikes + 1);
    }

    setTieneLike(!tieneLike);
  };

  return (
    <article className="publicacion">
      <div className="publicacion-header">
        <div className="foto-perfil"></div>

        <h4>{usuario}</h4>
      </div>

      <img
        src={imagen}
        alt="post"
        className="imagen-publicacion"
      />

      <div className="publicacion-info">

        <button
          className="boton-like"
          onClick={manejarLike}
        >
          {tieneLike ? "❤️" : "🤍"}
        </button>

        <p className="likes">
          {cantidadLikes} likes
        </p>

        <p>
          <span>{usuario}</span> {descripcion}
        </p>
      </div>
    </article>
  );
}

export default Publicacion;