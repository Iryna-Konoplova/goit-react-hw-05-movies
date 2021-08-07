// Модули
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

// Компоненты
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './components/MovieDetailsPage';

// Стили
import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>

        <Route path="/:moviesId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}
