import { useEffect, useState } from "react";
import "./App.css";

const FollowMaouse = () => {
  const [eneable, setEneable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("effecto ", { eneable });

    const handelMove = (event) => {
      const { clientX, clientY } = event;
      console.log(clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    if (eneable) {
      window.addEventListener("mousemove", handelMove);
    }

    //desactivar suscripcion sino queda para siempre
    return () => {
      window.removeEventListener("mousemove", handelMove);
    };
  }, [eneable]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEneable(!eneable)}>
        {eneable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};

function App() {
  return <main>{<FollowMaouse />}</main>;
}

export default App;
