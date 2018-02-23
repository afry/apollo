import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './Form.css';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  inline: false,
};

const Form = (props) => {
  const {
    children,
    inline,
  } = props;

  const className = classNames([
    styles.form,
    inline ? styles['form-inline'] : ''
  ]);

  return (
    <form className={className}>{children}</form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
