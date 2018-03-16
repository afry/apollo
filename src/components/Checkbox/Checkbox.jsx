import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Checkbox.css';

const propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  className: undefined,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
};

const Checkbox = (props) => {
  const {
    className,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.checkbox,
  );

  return (
    <div className={classes}>
      <input {...other} type="checkbox" />
      <span className={styles.checkmark} />
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
