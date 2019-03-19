import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormFeedback.css';

const propTypes = {
  className: PropTypes.string,
  indented: PropTypes.bool,
  valid: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  indented: false,
  valid: false,
};

const FormFeedback = props => {
  const { className, indented, valid, ...other } = props;

  const classes = classNames([
    className,
    styles['form-feedback'],
    valid ? styles['form-feedback-valid'] : '',
    indented ? styles['form-feedback-indented'] : '',
  ]);

  return <div {...other} className={classes} />;
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
