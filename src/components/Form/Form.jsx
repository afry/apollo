import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Form.css';

const propTypes = {
  inline: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  inline: false,
  innerRef: undefined,
};

const Form = (props) => {
  const {
    inline,
    innerRef,
    ...other
  } = props;

  const className = classNames(
    styles.form,
    inline ? styles['form-inline'] : ''
  );

  return (
    <form {...other} ref={innerRef} className={className} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
