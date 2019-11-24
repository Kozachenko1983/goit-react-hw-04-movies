import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import * as Api from '../../services/api';
import ActorCard from '../../components/ActorCard/ActorCard';
import styles from './Cast.module.css';
import { getIdFromProps } from '../../services/getIdFromProps';

export default class Cast extends Component {
  state = {
    cast: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const id = getIdFromProps(this.props);
    Api.getMoviesCast(id)
      .then(({ data }) => {
        this.setState({ cast: data.cast });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { cast, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />}
        {!!cast.length && (
          <ul className={styles.list}>
            {cast.map(item => (
              <li className={styles.listItem} key={item.cast_id}>
                <ActorCard cast={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
