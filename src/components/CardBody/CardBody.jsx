import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './CardBody.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const CardBody = (props) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles['card-body'],
  );

  return (
    <Tag {...other} className={classes} />
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
