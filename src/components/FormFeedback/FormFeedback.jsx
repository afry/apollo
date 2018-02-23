import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './FormFeedback.css';

const propTypes = {
  children: PropTypes.node,
  indented: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  indented: false,
};

const FormFeedback = (props) => {
  const {
    children,
    indented
  } = props;

  const className = classNames([
    styles['form-feedback'],
    indented ? styles['form-feedback-indented'] : '',
  ]);

  return (
    <div className={className}>{children}</div>
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;

