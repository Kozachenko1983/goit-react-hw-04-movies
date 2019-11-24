import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import Nav from '../Nav/Nav';
import styles from './App.module.css';

const App = () => (
  <div className={styles.wrapper}>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
