import { useEffect, useState, useMemo } from "react";
import allMovies from "../Components/MovieFilter/Data/movies.json";
import genreOptions from "../Components/MovieFilter/Data/genreOptions.json";

export default function MovieFilter() {
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTem] = useState("");

  const movies = useMemo(() => {
    if (genre === "") {
      if (searchTerm === "") {
        return allMovies;
      } else {
        return allMovies.filter((movie) => {
          const searchFields =
            `${movie.title.toLowerCase()} ` +
            `${movie.year} ` +
            `${movie.directors.toLowerCase()}` +
            `${movie.actors.join("").toLowerCase()}` +
            `${movie.plot.toLowerCase()}`;
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return allMovies.filter((movie) => {
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      return movieGenre.includes(genre);
    });
  }, [genre, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setGenre("");
    }
  }, [searchTerm]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold my-6">
        Top 100 Greatest Movies of All Time
      </h1>
      <form className="flex flex-col w-72">
        <select
          className="px-2 py-1 border w-40"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genreOptions.map((option, i) => {
            return (
              <option className="py-2" value={option.value} key={i}>
                {option.label}
              </option>
            );
          })}
        </select>
        <input
          className="border p-1 px-3 my-3"
          name="searchMovie"
          placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => setSearchTem(e.target.value)}
        />
      </form>
      <hr className="mb-6 mt-3" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="md:flex border rounded p-4 my-4 lg:my-0 text-ellipsis overflow-hidden"
            >
              <div className="flex-none md:w-48 flex justify-center items-center">
                <img
                  src={`https://m.media-amazon.com/images${movie.posterUrl}`}
                  alt=""
                />
              </div>
              <div className={`lg:grow flex flex-col`}>
                <h1 className="text-base font-bold mt-2">{movie.title}</h1>
                <span className="text-sm mt-2">
                  Year:
                  <span className="m-2">{movie.year}</span>
                  Runtime:
                  <span className="m-2">{movie.runtime}</span>
                </span>
                <span className="text-sm mt-2">
                  Genre:
                  <span className="m-2">{movie.genre.join(", ")}</span>
                </span>
                <span className="text-sm mt-2">
                  Director:
                  <span className="m-2">{movie.directors}</span>
                </span>
                <span className="text-sm mt-2">
                  Actors:
                  <span className="m-2">{movie.actors.join(", ")}</span>
                </span>
                <p className="text-sm mt-2">{movie.plot}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
