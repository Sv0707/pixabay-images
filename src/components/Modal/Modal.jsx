// import { Component } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRootRef = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscPress);

    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRootRef
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
