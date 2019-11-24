import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => (
  <ul>
    {movies.map(el => (
      <li key={el.id}>
        <Link
          to={{
            pathname: `/movies/${el.id}`,
            state: { from: location },
          }}>
          {el.title || el.name}
        </Link>
      </li>
    ))}
  </ul>
);
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};

export default MoviesList;
