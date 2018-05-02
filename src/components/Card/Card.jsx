import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Card.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const Card = (props) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.card,
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
