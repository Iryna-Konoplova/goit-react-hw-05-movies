// Модули
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { fetchTrendingMovies } from '../services/movies-api';

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  // const API_KEY = "9591f4746fdeff1373a9d81bfa034b09";
  // fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(console.log);
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
