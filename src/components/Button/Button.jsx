import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onClick }) => (
  <button type="button" className={s.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
