import "./Sugerencias.css";

import UsuarioSugerido from "../UsuarioSugerido";

function Sugerencias() {
  return (
    <aside className="sugerencias">
      <h3>Sugerencias</h3>

      <UsuarioSugerido nombre="milo" />
      <UsuarioSugerido nombre="nala" />
      <UsuarioSugerido nombre="kitty" />
    </aside>
  );
}

export default Sugerencias;