import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useRef } from "react"; // no renderiza el componente todo el tiempo

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();
  const handleClick = () => {
    const valueEl = inputRef.current;
  };
  return (
    <div className="page">
      <header>
        <h1>Buscador de Pelicuas</h1>
        <form action="" className="form">
          <input
            ref={inputRef}
            type="text "
            placeholder="Avenger, Star Wars, The Matrix"
          />
          <button onClick={handleClick} type="submit">
            Buscar
          </button>
        </form>
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
