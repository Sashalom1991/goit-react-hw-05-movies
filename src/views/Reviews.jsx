import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as apiFilms from '../service/apiMovies';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    apiFilms.MoviesReviews(movieId).then(rev => setReviews(rev));
  }, [movieId]);

  console.log(reviews)
  return (<>
    {reviews.length > 0 ? (<ul className="List">
        {reviews.map( review => { return(
            <li key={review.id}>
            <p><b>Author</b> {review.author}</p>
            <p>{review.content}</p>
            </li>
        )})}
    </ul>): (<p>Nothing was found for your query</p>) }
  </>);
}
