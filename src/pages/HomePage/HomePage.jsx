import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import * as Api from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    Api.getMovies()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading, error } = this.state;
    return (
      <div>
        <h2>Trending Tooday</h2>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {!!movies.length && <MoviesList movies={movies} props={this.props} />}
      </div>
    );
  }
}
