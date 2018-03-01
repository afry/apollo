import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Form.css';

const propTypes = {
  inline: PropTypes.bool,
};

const defaultProps = {
  inline: false,
};

const Form = (props) => {
  const {
    inline,
    ...other
  } = props;

  const className = classNames(
    styles.form,
    inline ? styles['form-inline'] : ''
  );

  return (
    <form {...other} className={className} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
