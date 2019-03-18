import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './ModalFooter.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const ModalFooter = ({className, tag: Tag, ...other}) => {
  const classes = classNames(className, styles['modal-footer']);
  return <Tag {...other} className={classes} />;
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
