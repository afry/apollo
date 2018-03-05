import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './RadioButton.css';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  value: undefined,
};

const RadioButton = (props) => {
  const {
    ...other
  } = props;

  return (
    <div className={styles['radio-button']}>
      <input {...other} type="radio" />
      <span className={styles.checkmark} />
    </div>
  );
};

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
