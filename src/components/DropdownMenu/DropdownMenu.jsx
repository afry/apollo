import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './DropdownMenu.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const contextTypes = {
  open: PropTypes.bool
};

const DropdownMenu = (props, context) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const {
    open,
  } = context;

  const classes = classNames(
    className,
    styles['dropdown-menu'],
    open ? styles.open : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
DropdownMenu.contextTypes = contextTypes;

export default DropdownMenu;

