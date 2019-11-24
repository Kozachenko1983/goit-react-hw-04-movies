import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetailsCard.module.css';

const MovieDetailsCard = ({ details }) => (
  <div className={styles.movieCard}>
    <div className={styles.mainInfo}>
      <div className={styles.imageBox}>
        <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="Poster" />
      </div>
      <div>
        <h3 className={styles.movieName}>{details.title}</h3>
        <p>
          User Score {details.vote_average * 10}
          &#37;
        </p>
        <h4>Overview</h4>
        <p>{details.overview}</p>
        <h4>Genres</h4>
        <p>
          {details.genres.map(el => (
            <span key={el.id}>{el.name} </span>
          ))}
        </p>
      </div>
    </div>
  </div>
);
MovieDetailsCard.propTypes = {
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};

export default MovieDetailsCard;
