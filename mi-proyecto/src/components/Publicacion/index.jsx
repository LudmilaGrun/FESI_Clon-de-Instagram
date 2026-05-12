import "./Publicacion.css";

function Publicacion({ usuario, imagen, likes, descripcion }) {
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
        <p className="likes">{likes} likes</p>

        <p>
          <span>{usuario}</span> {descripcion}
        </p>
      </div>
    </article>
  );
}

export default Publicacion;