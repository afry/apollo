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

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }


  render() {
    let {
      innerRef,
      tag: Tag,
      type,
    } = this.props;

    const {
      children,
      className,
      color,
      disabled,
      loading,
      size,
      ...other
    } = this.props;

    const isDisabled = disabled || loading;

    const classes = classNames(
      className,
      styles.button,
      styles[`button-${color}`],
      size ? styles[`button-${size}`] : '',
      loading && styles['button-loading'],
    );

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
        onClick={this.handleClick}
        type={type}
      >
        <div>
          {children}
        </div>
        { loading && (
          <div>
            <Loader width={'100%'} height={'100%'} /> 
          </div>
        )}
      </Tag>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
