import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Form.css';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const Form = (props) => {
  const { children } = props;

  return (
    <form className={styles.Form}>{children}</form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
