import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoreInfo.module.css';

const MoreInfo = ({ details, location }) => (
  <div>
    <p>Additinal information</p>
    <ul className={styles.moreInfo}>
      <li>
        <Link to={{ pathname: `/movies/${details.id}/cast`, state: { ...location } }}>Cast</Link>
      </li>
      <li>
        <Link to={{ pathname: `/movies/${details.id}/reviews`, state: { ...location } }}>
          Rewiews
        </Link>
      </li>
    </ul>
  </div>
);
MoreInfo.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    from: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
export default MoreInfo;
