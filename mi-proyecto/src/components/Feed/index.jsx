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

              liked: false,

              descripcion:
                "There is something here",
            })
          );

        setPublicaciones(
          publicacionesFormateadas
        );
      });
  }, []);

  const toggleLike = (id) => {
    setPublicaciones((prev) =>
      prev.map((pub) => {
        if (pub.id === id) {
          return {
            ...pub,

            liked: !pub.liked,

            likes: pub.liked
              ? pub.likes - 1
              : pub.likes + 1,
          };
        }

        return pub;
      })
    );

    if (
      publicacionSeleccionada &&
      publicacionSeleccionada.id === id
    ) {
      setPublicacionSeleccionada(
        (prev) => ({
          ...prev,

          liked: !prev.liked,

          likes: prev.liked
            ? prev.likes - 1
            : prev.likes + 1,
        })
      );
    }
  };

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
                toggleLike={
                  toggleLike
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