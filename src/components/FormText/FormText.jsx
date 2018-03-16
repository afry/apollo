import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormText.css';

const propTypes = {
  className: PropTypes.string,
  indented: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  indented: false,
};

const FormText = (props) => {
  const {
    className,
    indented,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['form-text'],
    indented ? styles['form-text-indented'] : '',
  );

  return (
    <div {...other} className={classes} />
  );
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
