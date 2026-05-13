import "./TarjetaPerfil.css";

function TarjetaPerfil() {
  return (
    <div className="tarjeta-perfil">
      <img
        src="https://i.pravatar.cc/300"
        alt="perfil"
      />

      <h2>
        ludmilita ✓
      </h2>

      <p>@ludmilita</p>

      <div className="estadisticas">
        <div>
          <strong>24</strong>
          <span>Posts</span>
        </div>

        <div>
          <strong>1.2K</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>530</strong>
          <span>Following</span>
        </div>
      </div>

      <p className="bio">
        aesthetic girl <br />
        cat lover 🐱
      </p>

      <button>
        Editar perfil
      </button>
    </div>
  );
}

export default TarjetaPerfil;