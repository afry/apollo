import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavItem.css';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'li'
};

const NavItem = (props) => {
  const {
    tag: Tag,
    ...other
  } = props;

  const className = classNames(styles['nav-item']);

  return (
    <Tag {...other} className={className} />
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
