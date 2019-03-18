import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../Loader';
import * as styles from './Button.css';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'link',
  ]),
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

const defaultProps = {
  className: undefined,
  color: 'secondary',
  disabled: false,
  innerRef: undefined,
  loading: false,
  onClick: undefined,
  size: undefined,
  tag: 'button',
  type: 'button',
};

const Button = ({
  children,
  className,
  color,
  disabled,
  loading,
  onClick,
  size,
  innerRef,
  ...other
}) => {
  const handleClick = e => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  const isDisabled = disabled || loading;

  const classes = classNames(
    className,
    styles.button,
    styles[`button-${color}`],
    size ? styles[`button-${size}`] : '',
    loading && styles['button-loading'],
  );

  let {type, tag: Tag} = other;

  if (other.href) {
    Tag = 'a';
  }

  if (Tag !== 'button') {
    type = undefined;
  }

  return (
    <Tag
      ref={innerRef}
      {...other}
      className={classes}
      disabled={isDisabled}
      onClick={handleClick}
      type={type}
    >
      <div>{children}</div>
      {loading && (
        <div>
          <Loader width="100%" height="100%" />
        </div>
      )}
    </Tag>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
