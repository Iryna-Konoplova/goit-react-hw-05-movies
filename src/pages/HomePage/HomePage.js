// Модули
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Компоненты
import { fetchTrendingMovies } from '../../services/movies-api';

// Стили
import styles from './homePage.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
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
