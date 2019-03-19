import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Breadcrumb.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  tag: 'a',
};

const Breadcrumb = ({ active, className, tag: Tag, ...other }) => {
  const classes = classNames(
    className,
    styles.breadcrumb,
    active ? styles.active : '',
  );

  return <Tag {...other} className={classes} />;
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
