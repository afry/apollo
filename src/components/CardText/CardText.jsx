import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardText.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'p',
};

const CardText = props => {
  const {className, tag: Tag, ...other} = props;

  const classes = classNames(className, styles['card-text']);

  return <Tag {...other} className={classes} />;
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

export default CardText;
