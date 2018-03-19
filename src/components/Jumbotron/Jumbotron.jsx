import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Jumbotron.css';

const propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  tag: 'div',
};

const Jumbotron = (props) => {
  const {
    className,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.jumbotron,
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
