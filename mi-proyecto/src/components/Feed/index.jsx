import axios from "axios";
import { useEffect, useState } from "react";

import "./Feed.css";

import Historias from "../Historias";
import Publicacion from "../Publicacion";
import ModalPublicacion from "../ModalPublicacion";

function Feed() {
  const [publicaciones, setPublicaciones] =
    useState([]);

  const [
    publicacionSeleccionada,
    setPublicacionSeleccionada,
  ] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      )
      .then((response) => {
        const publicacionesFormateadas =
          response.data.map(
            (gato, index) => ({
              id: gato.id,

              imagen: gato.url,

              usuario: `user_${
                index + 1
              }`,

              likes: Math.floor(
                Math.random() * 5000
              ),

              descripcion:
                "There is something here",
            })
          );

        setPublicaciones(
          publicacionesFormateadas
        );
      });
  }, []);

  return (
    <div className="feed">
      <div className="seccion-feed">
        <h2 className="titulo-seccion">
          STORIES
        </h2>

        <Historias />
      </div>

      <div className="seccion-feed">
        <h2 className="titulo-seccion">
          TRENDING
        </h2>

        <div className="publicaciones-grid">
          {publicaciones.map(
            (publicacion) => (
              <Publicacion
                key={publicacion.id}
                publicacion={
                  publicacion
                }
                seleccionarPublicacion={
                  setPublicacionSeleccionada
                }
              />
            )
          )}
        </div>
      </div>

      {publicacionSeleccionada && (
        <ModalPublicacion
          publicacion={
            publicacionSeleccionada
          }
          cerrarModal={() =>
            setPublicacionSeleccionada(
              null
            )
          }
        />
      )}
    </div>
  );
}

export default Feed;