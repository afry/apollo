import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Card.css';

const propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  dark: false,
  tag: 'div',
};

const Card = (props) => {
  const {
    className,
    dark,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.card,
    dark ? styles['card-dark'] : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
