import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Navbar.css';

const propTypes = {
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fixed: PropTypes.string,
  inverse: PropTypes.bool,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  expand: true,
  fixed: undefined,
  inverse: false,
  role: undefined,
  tag: 'nav',
};

const Navbar = (props) => {
  const {
    className,
    expand,
    fixed,
    inverse,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.navbar,
    expand ? styles['navbar-expand'] : '',
    fixed ? styles[`navbar-fixed-${fixed}`] : '',
    inverse ? styles['navbar-light'] : styles['navbar-dark'],
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
