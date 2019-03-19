import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Badge.css';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  color: 'primary',
  tag: 'span',
};

const Badge = ({ className, color, tag: Tag, ...other }) => {
  const classes = classNames(className, styles.badge, styles[`badge-${color}`]);
  return <Tag {...other} className={classes} />;
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
