import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utilities';
import * as styles from './Button.css';

const propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
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
  id: undefined,
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
      id,
      name,
      size,
      type,
    } = this.props;

    const className = classNames([
      styles.button,
      styles[`button-${color}`],
      size ? styles[`button-${size}`] : '',
    ]);

    return (
      <button
        className={className}
        disabled={disabled}
        id={id}
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
