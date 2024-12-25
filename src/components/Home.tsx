import { MovieCard } from "./MovieCard";
import "../App.css";
import { useEffect, useRef, useState } from "react";
import movies from "../data/movies.json";

export const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle search input change
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh on form submit
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.genre.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered); // Update filtered movies state
  };

  return (
    <>
      <main className="flex flex-col items-center mt-6 p-4">
        <section className="section-one flex flex-col items-center">
          <h1 className="text-2xl text-zinc-300 text-center">
            Movie<span className="text-zinc-50 font-bold">Trail</span>
          </h1>
          <p className="text-zinc-200 text-xl mt-3 text-center mb-6">
            Follow the trail to your next{" "}
            <span className="text-zinc-50 font-bold">must-watch</span> movie -
            explore and discover.
          </p>
          <form className="search-group flex mt-6" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setSearch(e.target.value)} // Update search term on change
              value={search}
              ref={searchRef}
            />
            <button type="submit" className="btn btn-active btn-primary mx-3">
              Search
            </button>
          </form>
        </section>
        <section className="section-two mt-10 w-full">
          <h1 className="text-zinc-200 text-2xl font-bold border-b-2 pb-4 border-blue-950 text-center">
            Movies
          </h1>
          <div>
            <div className="movie-grid grid gap-4 mt-6">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <MovieCard
                    key={index} // Added key for list rendering
                    poster={movie.poster}
                    title={movie.title}
                    genre={movie.genre}
                    release_date={movie.year}
                  />
                ))
              ) : (
                <div role="alert" className="alert alert-error w-full flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>No movies found matching your search!</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
