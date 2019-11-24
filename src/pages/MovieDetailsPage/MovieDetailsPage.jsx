import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import * as Api from '../../services/api';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import { getIdFromProps } from '../../services/getIdFromProps';

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.object,
      }),
    }).isRequired,
  };

  state = {
    details: {},
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const id = getIdFromProps(this.props);
    Api.getMoviesDetails(id)
      .then(({ data }) => {
        this.setState({ details: data });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  render() {
    const { details, isLoading, error } = this.state;
    const { match, location } = this.props;
    return (
      <div>
        <ButtonBack onGoback={this.handleGoback} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {!!Object.keys(details).length && (
          <div>
            <MovieDetailsCard details={details} />
            <MoreInfo details={details} location={location.state} />
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </div>
        )}
      </div>
    );
  }
}
