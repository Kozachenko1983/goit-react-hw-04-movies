import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import * as Api from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default class HomePage extends Component {
  static propTypes = {
    location: PropTypes.objectOf(PropTypes.string).isRequired,
  };

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

  componentWillUnmount() {}

  render() {
    const { movies, isLoading, error } = this.state;
    const { location } = this.props;
    return (
      <div>
        <h2>Trending Tooday</h2>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {!!movies.length && <MoviesList movies={movies} location={location} />}
      </div>
    );
  }
}
