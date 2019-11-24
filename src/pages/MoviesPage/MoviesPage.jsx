import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import * as Api from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import Search from '../../components/Search/Search';
import { queryFromLocation } from '../../services/queryFromLocation';

export default class MoviesPage extends Component {
  static propTypes = {
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { history, location } = this.props;
    history.push({
      ...location,
    });
    Api.getMoviesSearch(queryFromLocation(location))
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  onSearch = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    this.setState({ isLoading: true });
    Api.getMoviesSearch(query)
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, error, isLoading } = this.state;
    const { location } = this.props;
    return (
      <div>
        <Search onSearch={this.onSearch} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {!!movies.length && <MoviesList movies={movies} location={location} />}
      </div>
    );
  }
}
