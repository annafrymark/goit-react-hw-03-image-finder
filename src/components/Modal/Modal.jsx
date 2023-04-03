import React, { Component } from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  setCloseModal = event => {
    const hasClass = event.target.classList.contains(css.Overlay);
    if (hasClass) {
      this.props.onClick();
    }
  };

  render() {
    const { largeImage, tags } = this.props;
    return (
      <div className={css.Overlay} onClick={this.setCloseModal}>
        <div className={css.Modal}>
          {largeImage !== '' && <img src={largeImage} alt={tags} />}
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImage: PropTypes.string,
  tags: PropTypes.string,
};
