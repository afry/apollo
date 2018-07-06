import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Form.css';

const propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ]),
};

const defaultProps = {
  className: undefined,
  inline: false,
  innerRef: undefined,
};

/* eslint-disable react/prefer-stateless-function */
class Form extends React.PureComponent {
  render() {
    const {
      className,
      innerRef,
      inline,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.form,
      inline ? styles['form-inline'] : ''
    );

    return (
      <form {...other} ref={innerRef} className={classes} />
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
