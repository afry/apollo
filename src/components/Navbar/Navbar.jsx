import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Navbar.css';

const propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fixed: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  dark: false,
  expand: false,
  fixed: undefined,
  role: undefined,
  tag: 'nav',
};

const Navbar = (props) => {
  const {
    className,
    dark,
    expand,
    fixed,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.navbar,
    dark ? styles['navbar-dark'] : styles['navbar-light'],
    ((typeof (expand) === 'boolean' && expand) || expand === 'x-small')
      ? styles['navbar-expand']
      : styles[`navbar-expand-${expand}`],
    fixed ? styles[`navbar-fixed-${fixed}`] : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
