import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavLink.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  disabled: false,
  innerRef: undefined,
  tag: 'a',
};

const NavLink = (props) => {
  const {
    active,
    className,
    innerRef,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['nav-link'],
    active ? styles.active : '',
  );

  return (
    <Tag {...other} ref={innerRef} className={classes} />
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
