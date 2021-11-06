import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import * as apiFilms from '../service/apiMovies';

export default function HomePage() {
  const [topMovies, setTopMovies] = useState(null);

  useEffect(() => {
    apiFilms
      .ListPopularMoviesToday()
      .then(popMovies => setTopMovies(popMovies));
  }, []);

  return (
    <>
      <h2 className="Title">Trending today</h2>
      <ul className="List">
        {topMovies &&
          topMovies.map(topMovie => {
            return (
              <li key={topMovie.id}>
                <Link to={`/movies/${topMovie.id}`}>{topMovie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
