import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardImage.css';

const propTypes = {
  className: PropTypes.string,
  placement: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
};

const defaultProps = {
  className: undefined,
  placement: 'top',
  tag: 'img',
};

const CardImage = (props) => {
  const {
    className,
    placement,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['card-image'],
    placement ? styles[`card-image-${placement}`] : '',
  );

  return (
    <Tag {...other} className={classes} />
  );
};

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;

export default CardImage;
