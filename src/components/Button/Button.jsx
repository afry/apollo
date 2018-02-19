import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

export default class Button extends React.PureComponent {
  render() {
    return (
      <button
        className={styles.Button}
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
  disabled: false,
  name: undefined,
  onBlur: undefined,
  onClick: undefined,
  onFocus: undefined,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  type(props, propName) {
    const value = props[propName];
    if (!value.match(/^button|submit|reset$/)) {
      return new Error(`Invalid type: ${value}`);
    }
    return null;
  },
};
