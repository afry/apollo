/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Label.css';

const propTypes = {
  for: PropTypes.string,
};

const defaultProps = {
  for: undefined,
};

const Label = (props) => {
  const {
    for: htmlFor,
    ...other
  } = props;

  return (
    <label {...other} className={styles.label} htmlFor={htmlFor} />
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
