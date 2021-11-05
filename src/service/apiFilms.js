import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '419631da3183c09322b112e93ebb554b';

// async function fetchDefaultApiMovies(url = '') {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function ListPopularMoviesToday() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function SearchMovies(searchName) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchName}&language=en-US&page=1&include_adult=false`,
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }

}

export async function InfoOfMovie(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function SearchActhorsMovies(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function MoviesReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
    );
    return response.data.results;
    
  } catch (error) {
    console.error(error);
  }
}
