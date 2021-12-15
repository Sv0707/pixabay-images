import { useState } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  // state = {
  //   search: "",
  // };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          value={search}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func };

export default Searchbar;
