import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormFeedback.css';

const propTypes = {
  indented: PropTypes.bool,
  valid: PropTypes.bool,
};

const defaultProps = {
  indented: false,
  valid: false,
};

const FormFeedback = (props) => {
  const {
    indented,
    valid,
    ...other
  } = props;

  const className = classNames([
    styles['form-feedback'],
    valid ? styles['form-feedback-valid'] : '',
    indented ? styles['form-feedback-indented'] : '',
  ]);

  return (
    <div {...other} className={className} />
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

