import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardLink.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const defaultProps = {
  className: undefined,
  tag: 'a',
};

const CardLink = (props) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['card-link'],
  );

  return (
    <Tag {...other} className={classes} />
  );
};

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
