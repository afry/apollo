import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  href: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  href: undefined,
  tag: 'a'
};

const NavbarBrand = (props) => {
  const {
    tag: Tag,
    ...other
  } = props;

  const classes = classNames('navbar-brand');

  return (
    <Tag {...other} className={classes} />
  );
};

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
