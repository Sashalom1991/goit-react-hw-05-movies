import { useParams, useRouteMatch } from 'react-router';
import { useEffect, useState, Suspense } from 'react';
import { Link, Route, useLocation} from 'react-router-dom';
import * as apiFilms from '../service/apiFilms';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const {url, path} =useRouteMatch();
  const {state} = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    apiFilms.InfoOfMovie(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  // console.log(movie);
  return (
    <div>
      <button type="button">Go back</button>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
          <div>
            <hr/>
            <ul >
              <li>
                <Link
                  to={{
                    pathname: `${url}/cast`,
                    state: {
                      backUrl: state?.backUrl || '/',
                      query: state?.query || '',
                    },
                  }}
                >
                  Cast
                </Link>
              </li>
              <li >
                <Link
                  to={{
                    pathname: `${url}/reviews`,
                    state: {
                      backUrl: state?.backUrl || '/',
                      query: state?.query || '',
                    },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <Suspense fallback={<h1>Loading...</h1>}>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Suspense>
        </>
      )}
    </div>
  );
}
