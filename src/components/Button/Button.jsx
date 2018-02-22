import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

const classNames = (options) => {
  const result = options.join(' ').replace(/ false/g, '').trim();
  return result;
};

const propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^button|submit|reset$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
};

const defaultProps = {
  children: undefined,
  color: 'secondary',
  disabled: false,
  name: undefined,
  onClick: undefined,
  size: '',
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
      this.props.onClick();
    }
  }

  render() {
    const {
      children,
      color,
      disabled,
      name,
      size,
      type,
    } = this.props;

    const className = classNames([
      styles.button,
      styles[`button-${color}`],
      size && styles[`button-${size}`],
    ]);

    return (
      <button
        className={className}
        disabled={disabled}
        name={name}
        onClick={this.handleClick}
        type={type}
      >{children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
