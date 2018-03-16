import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Form.css';

const propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  inline: false,
  innerRef: undefined,
};

const Form = (props) => {
  const {
    className,
    inline,
    innerRef,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.form,
    inline ? styles['form-inline'] : ''
  );

  return (
    <form {...other} ref={innerRef} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
