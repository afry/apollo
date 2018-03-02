import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Navbar.css';

const propTypes = {
  fixed: PropTypes.bool,
  inverse: PropTypes.bool,
};

const defaultProps = {
  fixed: false,
  inverse: false,
};

const Navbar = (props) => {
  const {
    fixed,
    inverse,
    ...other
  } = props;

  const className = classNames(
    styles.navbar,
    fixed ? styles[`navbar-fixed-${fixed}`] : '',
    inverse ? styles['navbar-inverse'] : '',
  );

  return (
    <div {...other} className={className} />
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
