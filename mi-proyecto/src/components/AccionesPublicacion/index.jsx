import { useState } from "react";

import "./AccionesPublicacion.css";

function AccionesPublicacion({ likesIniciales }) {
  const [likeActivo, setLikeActivo] = useState(false);

  const [likes, setLikes] = useState(likesIniciales);

  function manejarLike() {
    if (likeActivo) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLikeActivo(!likeActivo);
  }

  return (
    <div className="acciones-publicacion">
      <div className="iconos-acciones">
        <span
          className={`corazon ${
            likeActivo ? "like-activo" : ""
          }`}
          onClick={manejarLike}
        >
          {likeActivo ? "❤️" : "♡"}
        </span>

        <span>💬</span>

        <span>✈️</span>
      </div>

      <span>🔖</span>

      <p className="cantidad-likes">
        {likes} likes
      </p>
    </div>
  );
}

export default AccionesPublicacion;