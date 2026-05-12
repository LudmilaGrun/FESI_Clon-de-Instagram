import "./Feed.css";
import Publicacion from "../Publicacion";

function Feed() {
  const publicaciones = [
    {
      id: 1,
      usuario: "michi_lover",
      imagen:
        "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
      likes: 230,
      descripcion: "Durmiendo todo el día 🐱",
    },

    {
      id: 2,
      usuario: "cat_world",
      imagen:
        "https://cdn2.thecatapi.com/images/9j5.jpg",
      likes: 542,
      descripcion: "El rey de la casa 👑",
    },

    {
      id: 3,
      usuario: "gatitos",
      imagen:
        "https://cdn2.thecatapi.com/images/bpc.jpg",
      likes: 120,
      descripcion: "Modo tierno activado 😻",
    },
  ];

  return (
    <section className="feed">
      {publicaciones.map((publicacion) => (
        <Publicacion
          key={publicacion.id}
          usuario={publicacion.usuario}
          imagen={publicacion.imagen}
          likes={publicacion.likes}
          descripcion={publicacion.descripcion}
        />
      ))}
    </section>
  );
}

export default Feed;