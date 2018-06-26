import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Collapse.css';

const propTypes = {
  className: PropTypes.string,
  navbar: PropTypes.bool,
  open: PropTypes.bool,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const defaultProps = {
  className: undefined,
  navbar: false,
  open: false,
  tag: 'div',
};

const Collapse = (props) => {
  const {
    className,
    navbar,
    open,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.collapse,
    navbar ? styles['navbar-collapse'] : '',
    open ? styles.open : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
