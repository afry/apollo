import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './FormGroup.css';

const propTypes = {
  check: PropTypes.bool,
  children: PropTypes.node,
  inline: PropTypes.bool,
};

const defaultProps = {
  check: false,
  children: undefined,
  inline: false,
};

const FormGroup = (props) => {
  const {
    check,
    children,
    inline,
  } = props;

  const className = classNames([
    styles['form-group'],
    inline ? styles['form-group-inline'] : '',
    check ? styles['form-group-check'] : '',
  ]);

  return (
    <div className={className}>{children}</div>
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
