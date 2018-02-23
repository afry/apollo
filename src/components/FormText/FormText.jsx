import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './FormText.css';

const propTypes = {
  children: PropTypes.node,
  indented: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  indented: false,
};

const FormText = (props) => {
  const {
    children,
    indented,
  } = props;

  const className = classNames([
    styles['form-text'],
    indented ? styles['form-text-indented'] : '',
  ]);

  return (
    <div className={className}>{children}</div>
  );
};

FormText.propTypes = propTypes;
FormText.defaultProps = defaultProps;

export default FormText;
