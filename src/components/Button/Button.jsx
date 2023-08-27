import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/styles.module.css';

const Button = ({ onClick, hasMoreImages }) => (
  <div className={hasMoreImages ? styles.VisibleElement : styles.HiddenElement}>
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMoreImages: PropTypes.bool.isRequired,
};

export default Button;
