import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Input.css';

const propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ]),
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
  innerRef: undefined,
  onChange: undefined,
  type: 'text',
};

/* eslint-disable react/prefer-stateless-function */
class Input extends React.PureComponent {
  render() {
    const {
      className,
      innerRef,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.input,
    );

    return (
      <input {...other} ref={innerRef} className={classes} />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
