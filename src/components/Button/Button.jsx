import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

export default class Button extends React.PureComponent {
  render() {
    return (
      <button
        className={styles.Button}
        type={this.props.type}
        onClick={this.props.onClick}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        disabled={this.props.disabled}
      >{this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  children: undefined,
  disabled: false,
  onClick: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

Button.propTypes = {
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^button|submit|reset$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
