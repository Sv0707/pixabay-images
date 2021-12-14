import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    search: "",
  };

  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.reset();
  };

  reset = () => {
    this.setState({ search: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func };

export default Searchbar;
