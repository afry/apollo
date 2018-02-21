import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

export default class Button extends React.PureComponent {
  render() {
    const classNames = (options) => {
      const result = options.join(' ').replace(/ false/g, '').trim();
      return result;
    };

    const className = classNames([
      styles.button,
      this.props.small && styles['button-small'],
      this.props.large && styles['button-large'],
      this.props.primary && styles['button-primary'],
      this.props.danger && styles['button-danger'],
      this.props.success && styles['button-success'],
    ]);

    return (
      <button
        className={className}
        disabled={this.props.disabled}
        name={this.props.name}
        onBlur={this.props.onBlur}
        onClick={this.props.onClick}
        onFocus={this.props.onFocus}
        type={this.props.type}
      >{this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  children: undefined,
  danger: false,
  disabled: false,
  large: false,
  name: undefined,
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  primary: false,
  small: false,
  success: false,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^button|submit|reset$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
};
