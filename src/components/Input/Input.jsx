import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^text|number|password|email|tel$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
};

const defaultProps = {
  className: undefined,
  onChange: undefined,
  type: 'text',
};

const Input = (props) => {
  const {
    className,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.input,
  );

  return (
    <input {...other} className={classes} />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
