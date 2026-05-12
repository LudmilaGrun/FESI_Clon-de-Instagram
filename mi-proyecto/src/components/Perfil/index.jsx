import "./Perfil.css";

function Perfil() {
  return (
    <aside className="perfil">

      <div className="perfil-header">

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="perfil"
          className="perfil-imagen"
        />

        <div>
          <h3>ludmi.cats</h3>

          <p className="bio">
            Amante de los gatos 🐱
          </p>
        </div>

      </div>

      <div className="perfil-stats">

        <div>
          <strong>48</strong>
          <p>Posts</p>
        </div>

        <div>
          <strong>12k</strong>
          <p>Seguidores</p>
        </div>

        <div>
          <strong>530</strong>
          <p>Siguiendo</p>
        </div>

      </div>

      <button className="boton-perfil">
        Editar perfil
      </button>

    </aside>
  );
}

export default Perfil;