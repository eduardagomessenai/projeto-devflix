import { useState } from "react";
import MovieDesc from "../movieDescription/movieDescription";

const MovieCard = ({ movies }) => {
  const movie = movies;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="movie" onClick={toggleModal}>
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
      {isModalOpen && <MovieDesc movies={movie} click={toggleModal} />}
    </>
  );
};
export default MovieCard;
