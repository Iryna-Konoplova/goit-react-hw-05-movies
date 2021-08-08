// Модули
import axios from 'axios';

const API_KEY = '9591f4746fdeff1373a9d81bfa034b09';

const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};

const fetchMovies = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    )
    .then(({ data }) => data);
};

export { fetchTrendingMovies, fetchMovies };

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
