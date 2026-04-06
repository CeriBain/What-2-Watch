import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <MovieCard movie={{ title: "Dark Knight", release_date: "2008" }} />
      </div>
    </>
  );
}

export default App;
