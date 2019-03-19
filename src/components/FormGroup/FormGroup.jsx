import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormGroup.css';

const propTypes = {
  check: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
};

const defaultProps = {
  check: false,
  className: undefined,
  inline: false,
};

const FormGroup = props => {
  const {check, className, inline, ...other} = props;

  const classes = classNames(
    className,
    styles['form-group'],
    inline ? styles['form-group-inline'] : '',
    check ? styles['form-group-check'] : '',
  );

  return <div {...other} className={classes} />;
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
