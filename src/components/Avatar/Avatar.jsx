import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Avatar.css';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  size: 'small',
  tag: 'img',
};

const Avatar = (props) => {
  const {
    className,
    size,
    tag: Tag,
    ...other
  } = props;

  const classes = classNames(
    className,
    styles.avatar,
    styles[`avatar-${size}`],
  );

  return (
    <Tag {...other} className={classes} />
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
