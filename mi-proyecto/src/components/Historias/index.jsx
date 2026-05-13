import "./Historias.css";

import historias from "../../data/historias";
import Historia from "../Historia";

function Historias() {
  return (
    <div className="historias">
      {historias.map((historia) => (
        <Historia
          key={historia.id}
          historia={historia}
        />
      ))}
    </div>
  );
}

export default Historias;