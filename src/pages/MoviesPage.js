// Модули
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router';

// Компоненты
import { fetchMoviesByQuery } from '../services/movies-api';
import Searchbar from '../components/Searchbar/Searchbar';

// Стили
// import styles from '../Searchbar/searchbar.module.css';

export default function MoviesPage() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByQuery(query).then(setMoviesByQuery);
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
    setMoviesByQuery(null);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />

      {error && <p>Sorry! Somethimg went wrong. Try again, please!</p>}

      <ul>
        {moviesByQuery &&
          moviesByQuery.map(movie => (
            <li key={movie.id}>
              {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
