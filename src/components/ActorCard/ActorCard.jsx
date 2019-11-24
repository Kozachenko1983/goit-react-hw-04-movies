import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActorCard.module.css';

const ActorCard = ({ cast }) => (
  <div className={styles.actorCard}>
    <p className={styles.character}>Character:</p>
    <p className={styles.characterName}>{cast.character}</p>
    <div className={styles.imageBox}>
      <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="actor_image" />
    </div>

    <p className={styles.name}>{cast.name}</p>
  </div>
);
ActorCard.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActorCard;
