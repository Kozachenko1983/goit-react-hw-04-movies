import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import * as Api from '../../services/api';
import { getIdFromProps } from '../../services/getIdFromProps';

export default class Reviews extends Component {
  state = {
    results: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    Api.getMoviesReviews(id)
      .then(({ data }) => {
        this.setState({ results: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { results, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {results.length ? (
          <ul>
            {results.map(item => (
              <li key={item.id}>
                <p>Author: {item.author}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews found</p>
        )}
      </div>
    );
  }
}
