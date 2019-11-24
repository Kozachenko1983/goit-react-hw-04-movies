import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

export default class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder="Search movies..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
