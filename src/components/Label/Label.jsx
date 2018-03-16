/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Label.css';

const propTypes = {
  className: PropTypes.string,
  for: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  for: undefined,
};

const Label = (props) => {
  const {
    className,
    for: htmlFor,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.label,
  );

  return (
    <label {...other} className={classes} htmlFor={htmlFor} />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
