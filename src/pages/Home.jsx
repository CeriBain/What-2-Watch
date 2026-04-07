import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "Dark Knight", release_date: "2008" },
    { id: 2, title: "Oppenheimer", release_date: "2023" },
    { id: 3, title: "Tenet", release_date: "2020" },
    { id: 4, title: "1917 ", release_date: "2019" },
    { id: 5, title: "The Social Network", release_date: "2010" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
        ></input>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
