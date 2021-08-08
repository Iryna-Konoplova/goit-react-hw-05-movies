// Модули
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// Компоненты
import { fetchMovies } from '../../services/movies-api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

// Стили
import styles from './movieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div className={styles.movieDetailsPage}>
      <button onClick={() => {}}>Go Back</button>

      {movie && (
        <div className={styles.conteiner}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={styles.movieDetails}>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <hr />
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </div>
    </div>
  );
}
