// Модули
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import PropTypes from 'prop-types';

// Компоненты
import { fetchMovies } from '../services/movies-api';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies(movieId).then(setMovie);
  }, [movieId]);

  //   const API_KEY = "9591f4746fdeff1373a9d81bfa034b09";
  // fetch(`https://api.themoviedb.org/3/movie/451048?api_key=${API_KEY}&language=en-US`)
  //     .then(res => res.json())
  //     .then(console.log);

  return (
    <>
      <button onClick={() => {}}>Go Back</button>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>

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
        </div>
      )}
    </>
  );
}
