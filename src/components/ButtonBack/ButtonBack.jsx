import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonBack.module.css';

const ButtonBack = ({ onGoback }) => (
  <button type="button" className={styles.button} onClick={onGoback}>
    <i className={`${styles.icon} material-icons`}>arrow_back</i>
    Go back
  </button>
);
ButtonBack.propTypes = {
  onGoback: PropTypes.func.isRequired,
};

export default ButtonBack;
