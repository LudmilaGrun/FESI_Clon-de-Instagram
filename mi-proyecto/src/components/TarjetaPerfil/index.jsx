import "./TarjetaPerfil.css";

function TarjetaPerfil() {
  return (
    <div className="tarjeta-perfil">
      <img
        src="https://i.pravatar.cc/150?img=32"
        alt=""
      />

      <h2>ludmilita</h2>

      <p>
        aesthetic girl ✨ <br />
        cat lover 🐈
      </p>

      <div className="estadisticas">
        <div>
          <strong>24</strong>
          <span>Posts</span>
        </div>

        <div>
          <strong>1.2k</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>530</strong>
          <span>Following</span>
        </div>
      </div>

      <button>Editar perfil</button>
    </div>
  );
}

export default TarjetaPerfil;