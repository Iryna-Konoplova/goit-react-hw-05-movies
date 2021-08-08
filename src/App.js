// Модули
import { Switch, Route } from 'react-router';
// import { NavLink } from 'react-router-dom';

// Компоненты
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from './components/Navigation/Navigation';

// Стили
// import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}
