import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import './App.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage/>
        </Route>
        <Route>
          <NotFoundView/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
