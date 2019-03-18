import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DropdownMenu.css';

const propTypes = {
  className: PropTypes.string,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  right: false,
  tag: 'div',
};

const contextTypes = {
  open: PropTypes.bool,
};

const DropdownMenu = (props, context) => {
  const {className, right, tag: Tag, ...other} = props;

  const {open} = context;

  const classes = classNames(
    className,
    styles['dropdown-menu'],
    open ? styles.open : '',
    right ? styles['dropdown-menu-right'] : '',
  );

  return <Tag {...other} className={classes} />;
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;
