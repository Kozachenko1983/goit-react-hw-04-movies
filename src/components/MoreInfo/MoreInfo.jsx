import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoreInfo.module.css';

const MoreInfo = ({ details }) => (
  <div>
    <p>Additinal information</p>
    <ul className={styles.moreInfo}>
      <li>
        <Link to={`/movies/${details.id}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${details.id}/reviews`}>Rewiews</Link>
      </li>
    </ul>
  </div>
);
MoreInfo.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default MoreInfo;
