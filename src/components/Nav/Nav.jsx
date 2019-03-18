import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Nav.css';

const propTypes = {
  align: PropTypes.string,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  justified: PropTypes.bool,
  navbar: PropTypes.bool,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  vertical: PropTypes.bool,
};

const defaultProps = {
  align: 'left',
  className: undefined,
  collapsed: false,
  justified: false,
  navbar: false,
  tabs: false,
  tag: 'ul',
  vertical: false,
};

const Nav = ({
  align,
  className,
  collapsed,
  justified,
  navbar,
  tabs,
  tag: Tag,
  vertical,
  ...other
}) => {
  const classes = classNames(
    className,
    navbar ? styles['navbar-nav'] : styles.nav,
    collapsed ? styles['nav-collapsed'] : '',
    align ? styles[`nav-horizontal-${align}`] : '',
    justified ? styles['nav-justified'] : '',
    tabs ? styles['nav-tabs'] : '',
    vertical ? styles['nav-vertical'] : '',
  );

  return <Tag {...other} className={classes} />;
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
