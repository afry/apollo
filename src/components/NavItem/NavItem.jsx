import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavItem.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'li',
};

const NavItem = ({ className, tag: Tag, ...other }) => {
  const classes = classNames(className, styles['nav-item']);
  return <Tag {...other} className={classes} />;
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
