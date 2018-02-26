import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './FormFeedback.css';

const propTypes = {
  children: PropTypes.node,
  indented: PropTypes.bool,
  valid: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  indented: false,
  valid: false,
};

const FormFeedback = (props) => {
  const {
    children,
    indented,
    valid,
  } = props;

  const className = classNames([
    styles['form-feedback'],
    valid ? styles['form-feedback-valid'] : '',
    indented ? styles['form-feedback-indented'] : '',
  ]);

  return (
    <div className={className}>{children}</div>
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

