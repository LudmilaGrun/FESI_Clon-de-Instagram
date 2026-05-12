import "./styles/index.css";

import { useState } from "react";

import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Historias from "./components/Historias";
import Perfil from "./components/Perfil";

function App() {

  const [vistaActual, setVistaActual] =
    useState("feed");

  const [busqueda, setBusqueda] =
    useState("");

  return (
    <div>

      <Encabezado
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <div className="contenido-principal">

        <Sidebar
          setVistaActual={setVistaActual}
        />

        <main>

          {vistaActual === "feed" && (
            <>
              <Historias />

              <Feed
                busqueda={busqueda}
              />
            </>
          )}

          {vistaActual === "perfil" && (
            <Perfil />
          )}

        </main>

        {vistaActual === "feed" && (
          <Perfil />
        )}

      </div>

    </div>
  );
}

export default App;