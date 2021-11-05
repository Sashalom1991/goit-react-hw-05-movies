import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as apiFilms from '../service/apiFilms';

export default function MoviesPage() {
  const { url } = useRouteMatch();

  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    apiFilms.SearchMovies(searchName).then(res => {
      console.log(res);
      setMovies(res);
    });
    searchName('');
  }, []);

  const handleNameChange = e => {
    return setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      toast.info('Enter query!');
      return;
    }
    apiFilms.SearchMovies(searchName).then(res => setMovies(res));
    setSearchName('');
  };

  return (
    <>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchName}
          onChange={handleNameChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
