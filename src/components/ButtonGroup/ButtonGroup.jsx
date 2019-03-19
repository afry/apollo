import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './ButtonGroup.css';

const propTypes = {
  className: PropTypes.string,
  segmented: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  segmented: false,
  tag: 'div',
};

const ButtonGroup = ({className, segmented, tag: Tag, ...other}) => {
  const classes = classNames(
    className,
    styles['button-group'],
    segmented ? styles['button-group-segmented'] : '',
  );

  return <Tag {...other} className={classes} />;
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
