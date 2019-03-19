import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavbarToggle.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  onClick: undefined,
  tag: 'button',
  type: 'button',
};

const NavbarToggle = ({
  children,
  className,
  disabled,
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
    styles['navbar-toggle'],
    disabled ? styles.disabled : '',
  );

  let { type } = other;
  if (Tag !== 'button') {
    type = undefined;
  }

  return (
    <Tag
      {...other}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {children || <span className={styles['navbar-toggle-icon']} />}
    </Tag>
  );
};

NavbarToggle.propTypes = propTypes;
NavbarToggle.defaultProps = defaultProps;

export default NavbarToggle;
