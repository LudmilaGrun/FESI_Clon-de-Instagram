import "./App.css";

import Encabezado from "./components/Encabezado";
import BarraLateral from "./components/BarraLateral";
import Feed from "./components/Feed";
import Sugerencias from "./components/Sugerencias";

function App() {
  return (
    <div className="app">
      <Encabezado />

      <div className="layout">
        <BarraLateral />

        <main className="feed-principal">
          <Feed />
        </main>

        <Sugerencias />
      </div>
    </div>
  );
}

export default App;