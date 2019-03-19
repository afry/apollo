import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './ModalBody.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const ModalBody = ({className, tag: Tag, ...other}) => {
  const classes = classNames(className, styles['modal-body']);
  return <Tag {...other} className={classes} />;
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
