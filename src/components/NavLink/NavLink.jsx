import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavLink.css';

const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  className: undefined,
  disabled: false,
  innerRef: undefined,
  onClick: undefined,
  tag: 'a',
};

const NavLink = ({
  active,
  className,
  disabled,
  innerRef,
  onClick,
  tag: Tag,
  ...other
}) => {
  const handleClick = e => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  const classes = classNames(
    className,
    styles['nav-link'],
    active ? styles.active : '',
    other.disabled ? styles.disabled : '',
  );

  return (
    <Tag {...other} ref={innerRef} className={classes} onClick={handleClick} />
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
