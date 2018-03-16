import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './RadioButton.css';

const propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  className: undefined,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  value: undefined,
};

const RadioButton = (props) => {
  const {
    className,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['radio-button'],
  );

  return (
    <div className={classes}>
      <input {...other} type="radio" />
      <span className={styles.checkmark} />
    </div>
  );
};

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
