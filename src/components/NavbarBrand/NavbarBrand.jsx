import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavbarBrand.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  href: undefined,
  tag: 'a'
};

const NavbarBrand = (props) => {
  const {
    active,
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['navbar-brand'],
    active ? styles.active : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
