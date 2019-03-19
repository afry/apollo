import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Container.css';

const propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  fluid: false,
  tag: 'div',
};

const Container = ({ className, fluid, tag: Tag, ...other }) => {
  const classes = classNames(
    className,
    fluid ? styles['container-fluid'] : styles.container,
  );

  return <Tag {...other} className={classes} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
