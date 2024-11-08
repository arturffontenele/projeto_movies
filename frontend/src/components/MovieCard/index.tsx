import { Link } from "react-router-dom";
import MoviesScore from "../MoviesScore/indes";

function MovieCard() {
  const movies = {
    id: 1,
    image:
      "https://media.themoviedb.org/t/p/w220_and_h330_face/6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg",
    title: "Alien: Romulus",
    count: 2,
    score: 4.0,
  };

  return (
    <div>
      <img
        className=" btn movies-card-image "
        src={movies.image}
        alt={movies.title}
      />
      <h3>{movies.title}</h3>
      <MoviesScore />
      <Link to={`/form/${movies.id}`}>
        <div>
          <div className="movies-btn">Avaliar</div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
