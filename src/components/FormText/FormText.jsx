import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './FormText.css';

const propTypes = {
  indented: PropTypes.bool,
};

const defaultProps = {
  indented: false,
};

const FormText = (props) => {
  const {
    indented,
    ...other
  } = props;

  const className = classNames(
    styles['form-text'],
    indented ? styles['form-text-indented'] : '',
  );

  return (
    <div {...other} className={className} />
  );
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
