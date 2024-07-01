import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useEffect, useRef, useState } from "react"; // no renderiza el componente todo el tiempo

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const fields = Object.fromEntries(new window.FormData(event.target));
    console.log({ query });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    setError(null);
  }, [query]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de Pelicuas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text "
            placeholder="Avenger, Star Wars, The Matrix"
            name="query"
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;

//api key
//url http://www.omdbapi.com/?apikey=2ba4ca50&
