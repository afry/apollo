import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormGroup.css';

const propTypes = {
  check: PropTypes.bool,
  inline: PropTypes.bool,
};

const defaultProps = {
  check: false,
  inline: false,
};

const FormGroup = (props) => {
  const {
    check,
    inline,
    ...other
  } = props;

  const className = classNames(
    styles['form-group'],
    inline ? styles['form-group-inline'] : '',
    check ? styles['form-group-check'] : ''
  );

  return (
    <div {...other} className={className} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
