import { useParams, useRouteMatch } from 'react-router';
import { useEffect, useState, Suspense, lazy } from 'react';
import { Link, Route, useLocation, useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as apiFilms from '../service/apiMovies';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Cast from './Cast';
// import Reviews from './Reviews';


const Cast = lazy(() => import('./Cast.jsx') /* webpackChunkName: "cast" */);
const Reviews = lazy(() =>
  import('./Reviews.jsx' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { state } = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    apiFilms.InfoOfMovie(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <div>
      <button type="button" onClick={() => history.goBack()} className="Btn">
        Go back
      </button>
      {movie && (
        <div className="Content">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="ContentDesc">
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
      )}
      <hr/>
      <div>
        <h4 className="Title">Addictional information</h4>
        <ul className="List">
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
          <li>
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
      <hr />
      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </div>
  );
}
