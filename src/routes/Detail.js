import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <button>
        <Link to="/">Go Home</Link>
      </button>

      <h1>Detail</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {
            <Movie
              key={movies.id}
              id={movies.id}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              summary={movies.summary}
              genres={movies.genres}
            />
          }
        </div>
      )}
    </div>
  );
};

export default Detail;
