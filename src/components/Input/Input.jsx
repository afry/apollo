import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Input.css';

const propTypes = {
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
  onChange: undefined,
  type: 'text',
};

const Input = (props) => {
  const {
    ...other
  } = props;

  return (
    <input
      {...other}
      className={styles.input}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
