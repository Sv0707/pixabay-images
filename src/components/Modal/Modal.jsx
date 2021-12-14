import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRootRef = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscPress);
  }

  onEscPress = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.modal}>{children}</div>
      </div>,
      modalRootRef
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
