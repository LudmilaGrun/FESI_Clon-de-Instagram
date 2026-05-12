import Encabezado from "./components/Encabezado";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Historias from "./components/Historias";
import Perfil from "./components/Perfil";

function App() {
  return (
    <div>
      <Encabezado />

      <div className="contenido-principal">
        <Sidebar />

        <main>
          <Historias />
          <Feed />
        </main>

        <Perfil />
      </div>
    </div>
  );
}

export default App;