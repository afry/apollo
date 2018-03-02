import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './NavLink.css';

const propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  active: false,
  disabled: false,
  tag: 'a',
};

const NavLink = (props) => {
  const {
    active,
    tag: Tag,
    ...other
  } = props;

  const className = classNames(
    styles['nav-link'],
    active ? styles.active : '',
  );

  return (
    <Tag {...other} className={className} />
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
