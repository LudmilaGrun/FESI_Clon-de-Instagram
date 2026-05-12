import "./Historias.css";

function Historias() {
  const historias = [
    "🐱",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
  ];

  return (
    <section className="historias">
      {historias.map((historia, index) => (
        <div className="historia" key={index}>
          <div className="circulo-historia">
            {historia}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Historias;