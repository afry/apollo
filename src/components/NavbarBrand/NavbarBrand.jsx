import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavbarBrand.css';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  children: undefined,
  className: undefined,
  href: undefined,
  icon: undefined,
  tag: 'a',
};

const NavbarBrand = ({
  active,
  children,
  className,
  icon,
  tag: Tag,
  ...other
}) => {
  const classes = classNames(
    className,
    styles['navbar-brand'],
    active ? styles.active : '',
  );

  if (icon) {
    return (
      <Tag {...other} className={classes}>
        <img alt="Missing" height="40" src={icon} /> {children}
      </Tag>
    );
  }

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
