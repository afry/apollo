import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardTitle.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'h5',
};

const CardTitle = ({ className, tag: Tag, ...other }) => {
  const classes = classNames(className, styles['card-title']);
  return <Tag {...other} className={classes} />;
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
