import "./Feed.css";

import Publicacion from "../Publicacion";
import ModalPublicacion from "../ModalPublicacion";

import { useEffect, useState } from "react";

import { obtenerGatos } from "../../services/catsApi";

function Feed() {
  const [publicaciones, setPublicaciones] =
    useState([]);

  const [publicacionSeleccionada,
    setPublicacionSeleccionada] =
    useState(null);

  useEffect(() => {
    cargarPublicaciones();
  }, []);

  const cargarPublicaciones = async () => {
    const gatos = await obtenerGatos();

    const publicacionesFormateadas =
      gatos?.map((gato, index) => ({
        id: gato.id,

        usuario: `cat_user_${index + 1}`,

        imagen: gato.url,

        likes: Math.floor(
          Math.random() * 1000
        ),

        descripcion:
          "Disfrutando una vida gatuna 🐱",
      }));

    setPublicaciones(publicacionesFormateadas);
  };

  return (
    <>
      <section className="feed">
        {publicaciones.map((publicacion) => (
          <div
            key={publicacion.id}
            onClick={() =>
              setPublicacionSeleccionada(
                publicacion
              )
            }
          >
            <Publicacion
              usuario={publicacion.usuario}
              imagen={publicacion.imagen}
              likes={publicacion.likes}
              descripcion={
                publicacion.descripcion
              }
            />
          </div>
        ))}
      </section>

      <ModalPublicacion
        publicacion={
          publicacionSeleccionada
        }
        cerrarModal={() =>
          setPublicacionSeleccionada(null)
        }
      />
    </>
  );
}

export default Feed;