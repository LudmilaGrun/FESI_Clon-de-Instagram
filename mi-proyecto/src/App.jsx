import "./App.css";

import Encabezado from "./components/Encabezado";
import BarraLateral from "./components/BarraLateral";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <div className="layout">
        <BarraLateral />

        <main className="feed-principal">
          <Encabezado />

          <Feed />
        </main>
      </div>
    </div>
  );
}

export default App;