import axios from "axios";
import { useEffect, useState } from "react";

import "./Feed.css";

import Historias from "../Historias";
import Publicacion from "../Publicacion";
import ModalPublicacion from "../ModalPublicacion";

function Feed() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        const publicacionesFormateadas = response.data.map(
          (gato, index) => ({
            id: gato.id,
            imagen: gato.url,
            usuario: `cat_user_${index + 1}`,
            likes: Math.floor(Math.random() * 5000),
            descripcion: "Living my best cat life 🐱✨",
          })
        );

        setPublicaciones(publicacionesFormateadas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="feed">
      <Historias />

      {publicaciones.map((publicacion) => (
        <Publicacion
          key={`${publicacion.id}-${publicacion.usuario}`}
          publicacion={publicacion}
          seleccionarPublicacion={setPublicacionSeleccionada}
        />
      ))}

      {publicacionSeleccionada && (
        <ModalPublicacion
          publicacion={publicacionSeleccionada}
          cerrarModal={() =>
            setPublicacionSeleccionada(null)
          }
        />
      )}
    </div>
  );
}

export default Feed;