import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardGroup.css';

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

const CardGroup = props => {
  const {className, segmented, tag: Tag, ...other} = props;

  const classes = classNames(
    className,
    styles['card-group'],
    segmented ? styles['card-group-segmented'] : '',
  );

  return <Tag {...other} className={classes} />;
};

CardGroup.propTypes = propTypes;
CardGroup.defaultProps = defaultProps;

export default CardGroup;
