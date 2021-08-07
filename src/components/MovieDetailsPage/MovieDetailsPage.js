// Модули
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// import PropTypes from 'prop-types';

import { fetchMovies } from '../../services/movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //     fetchMovies(movieId).then(setMovie)
  // }, [movieId])

  return <h2>Страница одного фильма ${movieId}</h2>;
}
