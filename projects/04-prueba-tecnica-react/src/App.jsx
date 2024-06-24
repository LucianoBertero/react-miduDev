import "./App.css";

import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Otro } from "./components/Otro";

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  //recuperar la imagen cuando tenemos cita
  const handleCLick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCLick}>Get new Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt="Imagen de gato" />}
      </section>
      <Otro> </Otro>
    </main>
  );
}

export default App;
