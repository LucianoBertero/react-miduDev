import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getRandomFact } from "./service/facts";

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/";

function App() {
  const [imageUrl, setImageUrl] = useState();
  const [fact, setFact] = useState();

  useEffect(() => {
    getRandomFact().then(setFact);
  }, []);

  //recuperar la imagen cuando tenemos cita

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `/cat/${_id}/says/${threeFirstWords}`;
        console.log(url);
        setImageUrl(url);
      });
  }, [fact]);

  const handleCLick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCLick}>Get new Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt="Imagen de gato"
          />
        )}
      </section>
    </main>
  );
}

export default App;
