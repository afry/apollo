/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Label.css';

const propTypes = {
  children: PropTypes.node,
  for: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  for: undefined,
};

const Label = (props) => {
  const {
    children,
    for: htmlFor,
  } = props;

  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
