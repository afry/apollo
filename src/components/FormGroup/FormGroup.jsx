import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './FormGroup.css';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  inline: false,
};

const FormGroup = (props) => {
  const {
    children,
    inline,
  } = props;

  const className = classNames([
    styles['form-group'],
    inline ? styles['form-group-inline'] : ''
  ]);

  return (
    <div className={className}>{children}</div>
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;

