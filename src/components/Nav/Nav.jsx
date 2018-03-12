import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Nav.css';

const propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  navbar: PropTypes.bool,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  vertical: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  collapsed: false,
  horizontal: 'left',
  justified: false,
  navbar: false,
  tabs: false,
  tag: 'ul',
  vertical: false,
};

const Nav = (props) => {
  const {
    className,
    collapsed,
    horizontal,
    justified,
    navbar,
    tabs,
    tag: Tag,
    vertical,
    ...other
  } = props;

  const classes = classNames(
    className,
    navbar ? styles['navbar-nav'] : styles.nav,
    collapsed ? styles['nav-collapsed'] : '',
    horizontal ? styles[`justify-content-${horizontal}`] : '',
    justified ? styles['nav-justified'] : '',
    tabs ? styles['nav-tabs'] : '',
    vertical ? styles['nav-vertical'] : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
