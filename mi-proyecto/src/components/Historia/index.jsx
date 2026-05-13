import "./Historia.css";

function Historia({ historia }) {
  return (
    <div className="historia">
      <img src={historia.imagen} alt="" />

      <span>{historia.usuario}</span>
    </div>
  );
}

export default Historia;