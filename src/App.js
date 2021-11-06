import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import Navigation from './components/Navigation';
import '../node_modules/modern-normalize/modern-normalize.css';
// import '../node_modules/modern-normalize/pa'
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = lazy(() => import('./views/HomePage.jsx' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */));
const NotFoundView = lazy(() => import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */));

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Suspense fallback={<Loader />}>
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
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
