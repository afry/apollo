import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Input.css';

const propTypes = {
  autoComplete: PropTypes.bool,
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
  autoComplete: false,
  onChange: undefined,
  type: 'text',
};

const Input = (props) => {
  const {
    autoComplete,
    ...other
  } = props;

  return (
    <input
      {...other}
      autoComplete={autoComplete ? 'on' : 'off'}
      className={styles.input}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
