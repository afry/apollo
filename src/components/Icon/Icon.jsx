import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from './icons';
import * as styles from './Icon.css';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  type: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  size: 'x-small',
  type: undefined,
};

const Icon = props => {
  const {className, size, type, ...other} = props;

  const classes = classNames(className, styles.icon, styles[`icon-${size}`]);

  return (
    <svg {...other} className={classes} viewBox="0 0 1024 1024">
      <path d={icons[type]} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
