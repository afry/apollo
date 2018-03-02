import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Nav.css';

const propTypes = {
  horizontal: PropTypes.bool,
  navbar: PropTypes.bool,
  vertical: PropTypes.bool,
};

const defaultProps = {
  horizontal: true,
  navbar: false,
  vertical: false,
};

const Nav = (props) => {
  const {
    horizontal,
    navbar,
    vertical,
    ...other
  } = props;

  const className = classNames(
    styles.nav,
  );

  return (
    <ul {...other} className={className} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
