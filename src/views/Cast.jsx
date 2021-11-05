import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as apiFilms from '../service/apiFilms';

export default function Cast() {
  const { movieId } = useParams();
  const [castArr, setCastArr] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    apiFilms.SearchActhorsMovies(movieId).then(actors => setCastArr(actors));
  }, [movieId]);

  return (
    <ul>
      {castArr &&
        castArr.map(actor => {
          return (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img src="" alt="no photos" />
              )}

              <p>
                <b>Name:</b> {actor.name}
              </p>

              {actor.character === '' ? (
                <p>
                  <b>Character:</b> -
                </p>
              ) : (
                <p>
                  <b>Character:</b> {actor.character}
                </p>
              )}
            </li>
          );
        })}
    </ul>
  );
}
